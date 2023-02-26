import { Vector2 } from "react-three-fiber";
import Env from "./Envelope";

var silence: number = 0.0001;

class Synth
{
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

    constructor(windowSize: number, freq: number, numOscs: number = 3)
    {
        this.windowSize = windowSize;
        this.centreFrequency = freq;
        this.numOscs = numOscs;
        this.envelope = new Env();

        this.envelope.onBeginAttack = (time: number) =>
        {
            console.log('OnBeginAttack Synth callback. Time:')
            console.log(time)
            this.isPlaying = true;
            for (var oscIndex = 0; oscIndex < this.numOscs; oscIndex++)
            {
                var envGain = this.envGainNodes[oscIndex];
                var g = envGain.gain;
                g.cancelScheduledValues(time);
                //exponentialRampToValueAtTime doesn't like 0s. It won't work if the previous value is <= 0, or if the target value is <= 0.
                //Thus, we set the value to a small amount before, and fade the env to a small amount during release.
                g.setValueAtTime(silence, time);
                g.exponentialRampToValueAtTime(this.currentVelocity, time + this.envelope.attackTime);
                var attackEndTime: number = time + this.envelope.attackTime;
                g.exponentialRampToValueAtTime((this.currentVelocity * this.envelope.sustainProportion), attackEndTime + this.envelope.decayTime);
            }
        };

        this.envelope.onBeginRelease = (time: number) =>
        {
            for (let oscIndex = 0; oscIndex < this.numOscs; ++oscIndex)
            {
                if (this.envGainNodes[oscIndex] != null)
                {
                    var g = this.envGainNodes[oscIndex].gain;
                    // Need to explicitly set the control value first before calling exponentiaRampTo ...
                    // ( http://alemangui.github.io/blog//2015/12/26/ramp-to-value.html )
                    g.setValueAtTime(g.value, time);
                    g.exponentialRampToValueAtTime(silence, time + this.envelope.releaseTime);
                }
            }
        }
    }

    initOscs(audioContext: AudioContext)
    {
        for (let oscIndex: number = 0; oscIndex < this.numOscs; ++oscIndex)
        {
            this.oscs.push(audioContext.createOscillator());
            this.oscGainNodes.push(audioContext.createGain());
            this.envGainNodes.push(audioContext.createGain());

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
            envGain.connect(audioContext.destination);
            // Update osc gain
            oscGain.gain.setValueAtTime(1.0, audioContext.currentTime);
            if (oscIndex > 0)
            {
                if (this.harmonicsMultiplier === 0.0)
                    oscGain.gain.setValueAtTime(0.0, audioContext.currentTime);
                else
                    oscGain.gain.setValueAtTime((1.0 - (oscIndex / this.numOscs)) * 0.5, audioContext.currentTime);
            }
            // Update env gain
            envGain.gain.setValueAtTime(0.0, audioContext.currentTime);
            osc.start();
        }
        console.log("Initialized synth");
    }

    play(velocity: number, audioContext: AudioContext)
    {
        console.log(audioContext);
        console.log(audioContext.state);
        if (audioContext.state != "running")
            return;

        this.currentVelocity = velocity;
        console.log('Synth: Play');
        console.log(audioContext.currentTime);
        this.envelope.triggerAttackPortion(audioContext.currentTime);
    }
}

export default Synth