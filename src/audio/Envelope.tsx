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

    constructor(envType?: EnvType, adsr?: ADSR, sustainProportion?: number)
    {
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

    getAttackDecayTime() { return this.attackTime + this.decayTime; }
    getAttackDecaySustainTime() { return this.attackTime + this.decayTime; }
    hasAttackDecayComplete(currentTime: number) { return currentTime > this.envStartTime + this.getAttackDecayTime(); }
    hasAttackDecaySustainComplete(currentTime: number) { return currentTime > this.envStartTime + this.getAttackDecaySustainTime(); }
    hasEnvComplete(currentTime: number) { return currentTime > this.releaseTriggerTime + this.releaseTime; }

    setState(state: EnvState, time: number)
    {
        switch (state)
        {
            case EnvState.ATTACK:
                this.envStartTime = time;
                this.onBeginAttack();
                break;
            case EnvState.DECAY:
                break;
            case EnvState.SUSTAIN:
                this.onBeginSustain();
                break;
            case EnvState.RELEASE:
                this.releaseTriggerTime = time;
                this.shouldRelease = false;
                this.onBeginRelease();
                break;
            case EnvState.COMPLETE:
                this.onEnvComplete();
                break;
        }
        this.envState = state;
    }

    triggerAttackPortion(currentTime: number) { this.setState(EnvState.ATTACK, currentTime); }
    triggerReleasePortion(currentTime: number) { this.setState(EnvState.RELEASE, currentTime); }

    updateEnv(audioContext: AudioContext)
    {
        if (audioContext.state != "running")
            return;

        if (this.envType != EnvType.INFINITE)
        {
            if (this.envState === EnvState.ATTACK && this.hasAttackDecayComplete(audioContext.currentTime))
            {
                this.setState(EnvState.SUSTAIN, audioContext.currentTime);
                if (this.envType === EnvType.ONE_SHOT)
                    this.shouldRelease = true;
            }
            if (this.envState === EnvState.SUSTAIN)
            {
                if (this.envType === EnvType.LOOPING)
                {
                    this.shouldRelease = this.hasAttackDecaySustainComplete(audioContext.currentTime)
                }
                if (this.shouldRelease)
                {
                    this.setState(EnvState.RELEASE, audioContext.currentTime);
                }
            }
            if (this.envState === EnvState.RELEASE)
            {
                if (this.hasEnvComplete(audioContext.currentTime))
                {
                    this.setState(EnvState.COMPLETE, audioContext.currentTime);
                }
            }
            if (this.envState === EnvState.COMPLETE)
            {
                if (this.envType === EnvType.LOOPING && !this.shouldStopLooping)
                {
                    this.setState(EnvState.ATTACK, audioContext.currentTime);
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