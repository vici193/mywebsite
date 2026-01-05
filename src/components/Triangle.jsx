import React, { useRef } from 'react'
import { useGLTF, Center } from '@react-three/drei' // 1. Import Center
import { useFrame } from "@react-three/fiber";

const Triangle = (props) => {
    const { nodes, materials } = useGLTF('/models/triangle.glb')
    const triangleRef = useRef()

    useFrame(() => {
        if (!triangleRef.current) return;

        // This spins the whole group.
        // Since we use <Center> below, it will now spin on its own axis.
        triangleRef.current.rotation.x -= 0.03
        triangleRef.current.rotation.y -= 0.03
        // triangleRef.current.rotation.z -= 0.03
    })

    return (
        <group {...props} dispose={null}>
            {/* We apply the REF and the ROTATION to this outer group.
               The rotation=[0, PI/2, 0] orients the fan to face the right direction.
            */}
            <group ref={triangleRef} scale={0.13} rotation={[0, Math.PI / 2, 0]}>

                {/* 2. Wrap all meshes in <Center>. This realigns the model's pivot point to the middle. */}
                <Center>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Round_Pad_Side_Plates_0?.geometry}
                        material={materials.Side_Plates}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_ID_Disk_Frame_0?.geometry}
                        material={materials.ID_Disk_Frame}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_Red_Grips_0?.geometry}
                        material={materials.Red_Grips}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_Side_Plates_0?.geometry}
                        material={materials.Side_Plates}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_Side_Plates_DS_0?.geometry}
                        material={materials.Side_Plates_DS}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_Neon_Lights_0?.geometry}
                        material={materials.Neon_Lights}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_standardSurface1_0?.geometry}
                        material={materials.standardSurface1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_Side_Sub_Plates_0?.geometry}
                        material={materials.Side_Sub_Plates}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disk_Frame_2_Neon_Lights_2_0?.geometry}
                        material={materials.Neon_Lights_2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Outer_Textured_Grips_Textured_Grips_0?.geometry}
                        material={materials.Textured_Grips}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Inner_Textured_Grips_Textured_Grips_0?.geometry}
                        material={materials.Textured_Grips}
                    />
                </Center>
            </group>
        </group>
    )
}

useGLTF.preload('/models/triangle.glb')

export default Triangle