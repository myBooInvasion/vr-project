/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 BigLab.glb --transform --shadows --keepnames
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function BigLab(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/BigLab-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="LeftBuilding" position={[11.46, 0.5, -18.06]} scale={0.5}>
          <mesh name="Cube002" castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.Grid} />
          <mesh name="Cube002_1" castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials['Glass Black']} />
          <mesh name="Cube002_2" castShadow receiveShadow geometry={nodes.Cube002_2.geometry} material={materials.Plaster} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model/BigLab-transformed.glb')
