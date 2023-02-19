import React, { useRef, useState } from "react"
import * as THREE from "three";
import { Canvas, useFrame, Vector3, Props } from "react-three-fiber"
import Synth from "../audio/Synth"

interface BoxProps
{
    position: Vector3,
    synth?: Synth
}

const Box = (props: BoxProps) =>
{

    // To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube. We'll explore this more in the future.
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // In addition to the geometry, we need a material to color it.
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // This reference will give us direct access to the mesh so we can animate it
    const mesh = useRef(new THREE.Mesh(geometry, material))

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta, xrFrame) =>
    {
        props.synth?.envelope.updateEnv();
        // This function runs at the native refresh rate inside of a shared render-loop
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    })

    return (
        <mesh
            position={props.position}
            ref={mesh}
            scale={active ? [4, 4, 4] : [2, 2, 2]}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}
            onPointerDown={e =>
            {
                setActive(true);
                props.synth?.play(1.0);
            }}
            onPointerUp={e => setActive(false)}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial
                attach="material"
                color={hovered ? "hotpink" : "orange"}
            />
        </mesh>
    )
}

interface ThreeCanvasProps
{
    synth: Synth
}

const ThreeCanvas = (props: ThreeCanvasProps) => (
    <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Box position={[2.0, 0, 0]} synth={props.synth} />
        <Box position={[-2.0, 0, 0]} synth={props.synth} />
    </Canvas>
)

interface CanvasWrapperProps
{
    width: number,
    height: number,
    synth: Synth
}

const CanvasWrapper = (props: CanvasWrapperProps) => (
    <div style={{ width: props.width, height: props.height }}>
        <ThreeCanvas synth={props.synth} />
    </div>
)
export default CanvasWrapper