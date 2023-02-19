import { Audio } from "three";

enum EnvType
{
    HOLD,
    LOOPING,
    ONE_SHOT,
    INFINITE
}

enum EnvState
{
    ATTACK,
    DECAY,
    SUSTAIN,
    RELEASE,
    COMPLETE
}

interface ADSR
{
    attack: number,
    decay: number,
    sustain: number,
    release: number
}

class Env
{
    audioContext: AudioContext;
    envType: EnvType = EnvType.ONE_SHOT;
    envState: EnvState = EnvState.COMPLETE;

    attackTime: number = 0.1;
    decayTime: number = 0.1;
    sustainTime: number = 0.3;
    releaseTime: number = 0.15;

    sustainProportion: number = 0.8;

    releaseTriggerTime: number = 0.0;
    envStartTime: number = 0.0;

    shouldRelease: boolean = false;
    shouldStopLooping: boolean = false;

    onBeginAttack: Function = () => null;
    onBeginSustain: Function = () => null;
    onBeginRelease: Function = () => null;
    onEnvComplete: Function = () => null; // Envelope completed cycle. May loop.
    onEnvStopped: Function = () => null; // Envelope completed cucle and stopped. Will not loop.
    onEnvReset: Function = () => null; // Envelope was reset, possibly mid-cycle.

    constructor(audioContext: AudioContext);
    constructor(audioContext: AudioContext, envType?: EnvType, adsr?: ADSR, sustainProportion?: number)
    {
        this.audioContext = audioContext;
        this.envType = envType ?? EnvType.ONE_SHOT;
        this.attackTime = adsr?.attack ?? 0.1;
        this.decayTime = adsr?.decay ?? 0.1;
        this.sustainTime = adsr?.sustain ?? 0.3;
        this.releaseTime = adsr?.release ?? 0.7;
        this.sustainProportion = sustainProportion ?? 0.8;
    }

    reset()
    {
        this.shouldRelease = false;
        this.shouldStopLooping = false;
        this.envState = EnvState.COMPLETE;
        this.releaseTriggerTime = 0.0;
        this.envStartTime = 0.0;
        this.onEnvReset();
    }

    setAudioContext(audioContext: AudioContext) { this.audioContext = audioContext; }
    getAttackDecayTime() { return this.attackTime + this.decayTime; }
    getAttackDecaySustainTime() { return this.attackTime + this.decayTime; }
    hasAttackDecayComplete() { return this.audioContext.currentTime > this.envStartTime + this.getAttackDecayTime(); }
    hasAttackDecaySustainComplete() { return this.audioContext.currentTime > this.envStartTime + this.getAttackDecaySustainTime(); }
    hasEnvComplete() { return this.audioContext.currentTime > this.releaseTriggerTime + this.releaseTime; }

    setState(state: EnvState)
    {
        switch (state)
        {
            case EnvState.ATTACK:
                this.envStartTime = this.audioContext.currentTime;
                this.onBeginAttack();
                break;
            case EnvState.DECAY:
                break;
            case EnvState.SUSTAIN:
                this.onBeginSustain();
                break;
            case EnvState.RELEASE:
                this.releaseTriggerTime = this.audioContext.currentTime;
                this.shouldRelease = false;
                this.onBeginRelease();
                break;
            case EnvState.COMPLETE:
                this.onEnvComplete();
                break;
        }
        this.envState = state;
    }

    triggerAttackPortion() { this.setState(EnvState.ATTACK); }
    triggerReleasePortion() { this.setState(EnvState.RELEASE); }

    updateEnv()
    {
        if (this.envType != EnvType.INFINITE)
        {
            if (this.envState === EnvState.ATTACK && this.hasAttackDecayComplete())
            {
                this.setState(EnvState.SUSTAIN);
                if (this.envType === EnvType.ONE_SHOT)
                    this.shouldRelease = true;
            }
            if (this.envState === EnvState.SUSTAIN)
            {
                if (this.envType === EnvType.LOOPING)
                {
                    this.shouldRelease = this.hasAttackDecaySustainComplete()
                }
                if (this.shouldRelease)
                {
                    this.setState(EnvState.RELEASE);
                }
            }
            if (this.envState === EnvState.RELEASE)
            {
                if (this.hasEnvComplete())
                {
                    this.setState(EnvState.COMPLETE);
                }
            }
            if (this.envState === EnvState.COMPLETE)
            {
                if (this.envType === EnvType.LOOPING && !this.shouldStopLooping)
                {
                    this.setState(EnvState.ATTACK);
                }
                else
                {
                    this.onEnvStopped();
                }
            }
        }
    }
}

export default Env