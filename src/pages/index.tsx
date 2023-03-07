import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import TitledVideo from "../components/TitledVideo"
import { StaticImage } from 'gatsby-plugin-image'
import VideoComponent from "../components/Video";
import * as SC from "../components/styled-components"
import HeaderNavBar from "../components/HeaderNavBarComponent"

// var audioContext: AudioContext = new AudioContext();
// var demoSynth: Synth = new Synth(512, 200.0, 3);

//window.addEventListener('load', init, false);

// function init()
// {
//     try
//     {
//         // Fix up for prefixing
//         window.AudioContext = window.AudioContext || window.webkitAudioContext;
//         audioContext = new AudioContext();
//     }
//     catch (e)
//     {
//         alert('Web Audio API is not supported in this browser');
//     }
// }

//https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
// function resumeAudio()
// {
//     console.log(audioContext);
//     if (audioContext && audioContext.state != "running")
//     {
//         audioContext.resume().then(() =>
//         {
//             //demoSynth = new Synth(context, 512, 200.0, 3);
//             console.log('Playback resumed successfully');
//             demoSynth.initOscs(audioContext);
//         });
//     }
//     // Test playing a sound
//     // demoSynth.play(1.0, audioContext);
// }



const IndexPage: React.FC<PageProps> = () =>
{
    //const ReactAudioContext = React.createContext(audioContext);
    return (
        <main>
            <SC.ContentWrapper>
                <HeaderNavBar currentItemName="softsound" />
                {/* <SC.VideoRowWrapper> */}
                {/*1920x1080*/}
                {/* <TitledVideo header="Sound Design" embedURL="https://player.vimeo.com/video/802257789?h=d8e5179c5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" /> */}
                {/* <TitledVideo header="Technical Implementation" embedURL="https://player.vimeo.com/video/802257866?h=fddec7f716&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" /> */}
                {/* <TitledVideo header="Audio Programming" embedURL="https://player.vimeo.com/video/802257945?h=3e9481b528&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" /> */}
                {/* </SC.VideoRowWrapper> */}
                <SC.MediaWrapper>
                    {/* <SC.MediaHeader>Baldur's Gate III - Larian Studios</SC.MediaHeader> */}
                    <SC.MediaTextWrapper>
                        <SC.MediaTextCentredLarge>Sound Design.</SC.MediaTextCentredLarge>
                        <SC.Media>
                            <VideoComponent title="Sound Design" embedURL="https://player.vimeo.com/video/802257789?h=d8e5179c5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                        </SC.Media>
                    </SC.MediaTextWrapper>
                </SC.MediaWrapper>
                <SC.MediaWrapper>
                    {/* <SC.MediaHeader>Impacter Wwise Plugin - Audiokinetic</SC.MediaHeader> */}
                    <SC.MediaTextWrapper reverseImageTextOrder>
                        <SC.MediaTextCentredLarge>Sound Integration.</SC.MediaTextCentredLarge>
                        <SC.Media>
                            <VideoComponent title="Sound Integration" embedURL="https://player.vimeo.com/video/802257866?h=fddec7f716&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                        </SC.Media>
                    </SC.MediaTextWrapper>
                </SC.MediaWrapper>
                <SC.MediaWrapper>
                    {/* <SC.MediaHeader>Wwise Unreal Spatial Audio Features - Audiokinetic</SC.MediaHeader> */}
                    <SC.MediaTextWrapper>
                        <SC.MediaTextCentredLarge>Audio Programming.</SC.MediaTextCentredLarge>
                        <SC.Media>
                            <VideoComponent title="Audio Programming" embedURL="https://player.vimeo.com/video/802257945?h=3e9481b528&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
                        </SC.Media>
                    </SC.MediaTextWrapper>
                </SC.MediaWrapper>
            </SC.ContentWrapper>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Soft Sound | Home</title>
