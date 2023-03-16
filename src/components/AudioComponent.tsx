import * as React from "react"
import { useState, useEffect } from 'react';
import { useFrame } from "react-three-fiber"
import * as THREE from "three";
import type { HeadFC, PageProps } from "gatsby"
import VideoComponent from "../components/Video";
import * as SC from "../components/styled-components"
import HeaderNavBar from "../components/HeaderNavBarComponent"
import Synth from "../audio/Synth";
import * as SphereExtrude from "../shaders/sphere-extrude"

let initialized: boolean = false;
const demoSynth: Synth = new Synth(512, 500.0, 3);
let audioContext: AudioContext | undefined = undefined

//https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

function activateAudio()
{
    // Fix up for prefixing
    AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    if (!audioContext)
        return;

    console.log("Just after instantiating the AC: ");
    console.log(audioContext);

    if (audioContext && audioContext.state != "running")
    {
        return;
    }
    demoSynth.initOscs(audioContext);
}

const AudioComponent = () =>
{
    activateAudio();


    // To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube. We'll explore this more in the future.
    const geometry = new THREE.SphereGeometry();
    // In addition to the geometry, we need a material to color it.
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // This reference will give us direct access to the mesh so we can animate it
    const mesh = React.useRef(new THREE.Mesh(geometry, material))

    useFrame((state, delta, xrFrame) =>
    {
        demoSynth.envelope.updateEnv(audioContext);
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    })

    return (
        <mesh
            position={[0, 0, 0]}
            ref={mesh}
            scale={[1, 1, 1]}
            onPointerDown={e =>
            {
                demoSynth.play(0.8, audioContext);
            }}>
            <sphereGeometry attach="geometry" args={[]} />
            <shaderMaterial
                fragmentShader={SphereExtrude.frag}
                vertexShader={SphereExtrude.vert}
            />
            {/* <meshStandardMaterial
                attach="material"
                color={"orange"}
            /> */}
        </mesh>
    )
}
export default AudioComponent