import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Target = (props) => {
    const { nodes, materials } = useGLTF('models/target.glb')
    const targetRef = useRef()

    // Animation Loop
    useFrame(({ clock }) => {
        if (!targetRef.current) return;

        const t = clock.getElapsedTime()

        // ANIMATION 1: Floating Up and Down (Y-axis)
        targetRef.current.position.y += Math.sin(t * 2) * 0.01

        // ANIMATION 2: Spinning (Y-axis)
        targetRef.current.rotation.y += 0.01
    })

    return (
        <group {...props} dispose={null} ref={targetRef}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_white_0?.geometry}
                material={materials.white}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_blue_0?.geometry}
                material={materials.blue}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_red_0?.geometry}
                material={materials.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_yellow_0?.geometry}
                material={materials.yellow}
            />
        </group>
    )
}

useGLTF.preload('models/target.glb')

export default Target