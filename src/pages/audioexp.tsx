import * as React from "react"
import { useState, useEffect } from 'react';
import { Canvas } from "react-three-fiber"
import AudioComponent from "../components/AudioComponent";
import type { HeadFC, PageProps } from "gatsby"
import VideoComponent from "../components/Video";
import * as SC from "../components/styled-components"
import HeaderNavBar from "../components/HeaderNavBarComponent"
import Synth from "../audio/Synth";

const AudioExpPage: React.FC<PageProps> = () =>
{
    //const ReactAudioContext = React.createContext(audioContext);
    const [audioDemo, setAudioDemo] = useState<JSX.Element>();

    const onAddBtnClick = () =>
    {
        setAudioDemo(<Canvas><AudioComponent /></Canvas>);
        //setAudioDemo(<AudioComponent />);
    };
    return (
        <main>
            <HeaderNavBar currentItemName="softsound" />
            <button onClick={onAddBtnClick}> Init Audio </button>
            <div style={{ width: 1000, height: 1000 }}>{audioDemo}</div>
        </main>
    )
}

export default AudioExpPage

export const Head: HeadFC = () => <title>Soft Sound | Audio</title>