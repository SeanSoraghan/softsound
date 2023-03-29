import * as React from "react"
import { useState, useEffect, useMemo } from 'react';
import { useFrame, Canvas, useThree } from "react-three-fiber"
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
    if (initialized)
    {
        return;
    }
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
    initialized = true;
}

const AudioComponent = () =>
{
    activateAudio();

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) =>
    {
        setMousePosition({ left: event.pageX, top: event.pageY });
    }

    const [mousePosition, setMousePosition] = useState
        ({
            left: 0,
            top: 0
        })

    const { mouse } = useThree()
    // To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube. We'll explore this more in the future.
    const geometry = new THREE.SphereGeometry(1, 100, 100);
    // In addition to the geometry, we need a material to color it.
    const material = new THREE.ShaderMaterial;//new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // This reference will give us direct access to the mesh so we can animate it
    const mesh = React.useRef(new THREE.Mesh(geometry, material))
    const uniforms = useMemo(() =>
    ({
        time: { value: 0.0 },
        mouseX: { value: mouse.x },
        mouseY: { value: -mouse.y }
    }), []);
    useFrame((state, delta, xrFrame) =>
    {
        demoSynth.envelope.updateEnv(audioContext);
        const { clock } = state;
        mesh.current.material.uniforms.mouseX.value = mouse.x;
        mesh.current.material.uniforms.mouseY.value = -mouse.y;
        mesh.current.material.uniforms.time.value = clock.getElapsedTime();
    })

    return (
        //<Canvas onMouseMove={handleMouseMove}>
        <mesh ref={mesh} position={[0, 0, 0]} scale={[1, 1, 1]}
            onPointerDown={e =>
            {
                demoSynth.play(0.8, audioContext);
            }}>
            <sphereGeometry attach="geometry" args={[1, 100, 100]} />
            <shaderMaterial
                fragmentShader={SphereExtrude.frag}
                vertexShader={SphereExtrude.vert}
                uniforms={uniforms}
            />
            {/* <meshStandardMaterial
                attach="material"
                color={"orange"}
            /> */}
        </mesh>
        //</Canvas>
    )
}
export default AudioComponent