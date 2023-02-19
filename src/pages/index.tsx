import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Logo from "../components/LogoComponent"
import BulletText from "../components/BulletText"
import CanvasWrapper from "../components/CanvasWrapper"
import Synth from "../audio/Synth"

var audioContext: AudioContext = new AudioContext();
var demoSynth: Synth = new Synth(audioContext, 512, 200.0, 3);


window.addEventListener('load', init, false);

function init()
{
    try
    {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    }
    catch (e)
    {
        alert('Web Audio API is not supported in this browser');
    }
}

//https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
function resumeAudio()
{
    console.log(audioContext);
    if (audioContext && audioContext.state != "running")
    {
        audioContext.resume().then(() =>
        {
            //demoSynth = new Synth(context, 512, 200.0, 3);
            console.log('Playback resumed successfully');
        });
    }
    // Test playing a sound
    demoSynth.play(1.0);
}

const Header = styled.h1`
    color: white;
    margin: 0;
`

const pageStyles =
{
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    backgroundColor: "black",
    minHeight: "100vh"
}

const IndexPage: React.FC<PageProps> = () =>
{
    return (
        <main style={pageStyles}>
            <div onMouseDown={resumeAudio} onTouchStart={resumeAudio} style={{ height: '50px', alignItems: 'center' }}><Header>Soft Sound</Header></div>
            <CanvasWrapper width={window.innerWidth} height={240.0} synth={demoSynth} />
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
