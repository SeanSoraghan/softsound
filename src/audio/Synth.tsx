import { Vector2 } from "react-three-fiber";
import Env from "./Envelope";

var silence: number = 0.0001;

class Synth
{
    audioContext: AudioContext;
    windowSize: number;
    centreFrequency: number;
    numOscs: number;
    harmonicsMultiplier: number = 0.5;
    oscs: Array<OscillatorNode> = new Array<OscillatorNode>();
    oscGainNodes: Array<GainNode> = new Array<GainNode>();
    envGainNodes: Array<GainNode> = new Array<GainNode>();
    envelope: Env;
    isPlaying: boolean = false;
    currentVelocity: number = 0.0;

    constructor(audioContext: AudioContext, windowSize: number, freq: number, numOscs: number = 3)
    {
        this.audioContext = audioContext;
        this.windowSize = windowSize;
        this.centreFrequency = freq;
        this.numOscs = numOscs;
        this.envelope = new Env(this.audioContext);

        this.envelope.onBeginAttack = () =>
        {
            console.log('OnBeginAttack Synth callback')
            this.isPlaying = true;
            var t = this.audioContext.currentTime;
            for (var oscIndex = 0; oscIndex < this.numOscs; oscIndex++)
            {
                var envGain = this.envGainNodes[oscIndex];
                var g = envGain.gain;
                g.cancelScheduledValues(t);
                //exponentialRampToValueAtTime doesn't like 0s. It won't work if the previous value is <= 0, or if the target value is <= 0.
                //Thus, we set the value to a small amount before, and fade the env to a small amount during release.
                g.setValueAtTime(silence, t);
                g.exponentialRampToValueAtTime(this.currentVelocity, t + this.envelope.attackTime);
                t = t + this.envelope.attackTime;
                g.exponentialRampToValueAtTime((this.currentVelocity * this.envelope.sustainProportion), t + this.envelope.decayTime);
            }
        };

        this.envelope.onBeginRelease = () =>
        {
            var now: number = this.audioContext.currentTime;
            for (let oscIndex = 0; oscIndex < this.numOscs; ++oscIndex)
            {
                if (this.envGainNodes[oscIndex] != null)
                {
                    var g = this.envGainNodes[oscIndex].gain;
                    // Need to explicitly set the control value first before calling exponentiaRampTo ...
                    // ( http://alemangui.github.io/blog//2015/12/26/ramp-to-value.html )
                    g.setValueAtTime(g.value, now);
                    g.exponentialRampToValueAtTime(silence, now + this.envelope.releaseTime);
                }
            }
        }

        this.initOscs();
    }

    initOscs()
    {
        for (let oscIndex: number = 0; oscIndex < this.numOscs; ++oscIndex)
        {
            this.oscs.push(this.audioContext.createOscillator());
            this.oscGainNodes.push(this.audioContext.createGain());
            this.envGainNodes.push(this.audioContext.createGain());

            var osc: OscillatorNode = this.oscs[oscIndex];
            var oscGain: GainNode = this.oscGainNodes[oscIndex];
            var envGain: GainNode = this.envGainNodes[oscIndex];
            // if (synth.waveform === 0)
            //     osc.type = 'sine';
            // else if (synth.waveform === 1)
            //     osc.type = 'square';
            // else if (synth.waveform === 2)
            //     osc.type = 'sawtooth';
            osc.type = 'sine';

            osc.frequency.value = this.centreFrequency * (1.0 + oscIndex * this.harmonicsMultiplier);
            osc.connect(oscGain);
            oscGain.connect(envGain);
            //envGain.connect(synth.filter);
            envGain.connect(this.audioContext.destination);
            // Update osc gain
            oscGain.gain.setValueAtTime(1.0, this.audioContext.currentTime);
            if (oscIndex > 0)
            {
                if (this.harmonicsMultiplier === 0.0)
                    oscGain.gain.setValueAtTime(0.0, this.audioContext.currentTime);
                else
                    oscGain.gain.setValueAtTime((1.0 - (oscIndex / this.numOscs)) * 0.5, this.audioContext.currentTime);
            }
            // Update env gain
            envGain.gain.setValueAtTime(0.0, this.audioContext.currentTime);
            osc.start();
        }
    }

    play(velocity: number)
    {
        console.log(this.audioContext);
        console.log(this.audioContext.state);
        if (this.audioContext.state != "running")
            return;

        this.currentVelocity = velocity;
        console.log('Synth: Play');
        this.envelope.triggerAttackPortion();
    }
}

export default Synth