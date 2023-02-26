import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import Logo from "./src/components/LogoComponent"
import BulletText from "./src/components/BulletText"
import CanvasWrapper from "./src/components/CanvasWrapper"
import Synth from "./src/audio/Synth"
import EmbeddedVideo from "./src/components/EmbeddedVideo"

var audioContext: AudioContext = new AudioContext();
var demoSynth: Synth = new Synth(512, 200.0, 3);

//window.addEventListener('load', init, false);

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
            demoSynth.initOscs(audioContext);
        });
    }
    // Test playing a sound
    // demoSynth.play(1.0, audioContext);
}

const DESKTOP_BREAKPOINT: string = "1280px";

const Header = styled.h1`
    text-align: left;
    width: 100%;
    color: white;
    margin: 0;
    font-family: "Josefin Sans";
    font-weight: 100;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 32px;
    gap: 80px;
    background-color: black;
    @media (min-width: ${DESKTOP_BREAKPOINT}){
        justify-content: flex-start;
        gap: 200px;
    }
`

const VideoRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
    background-color: black;
    color: white;
    @media (min-width: ${DESKTOP_BREAKPOINT}){
        flex-direction: row;
        gap: 0;
    }
`

const IndexPage: React.FC<PageProps> = () =>
{
    //const ReactAudioContext = React.createContext(audioContext);
    return (
        <main>
            <HeaderWrapper>
                <Header>softsound</Header>
                <VideoRowWrapper>
                    {/*1920x1080*/}
                    <EmbeddedVideo header="Sound Design" embedURL="https://player.vimeo.com/video/802257789?h=d8e5179c5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                    <EmbeddedVideo header="Technical Implementation" embedURL="https://player.vimeo.com/video/802257866?h=fddec7f716&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                    <EmbeddedVideo header="Audio Programming" embedURL="https://player.vimeo.com/video/802257945?h=3e9481b528&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                </VideoRowWrapper>
            </HeaderWrapper>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
