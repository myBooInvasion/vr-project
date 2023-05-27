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
        <group name="RightBuilding" position={[0, 3.55, 0]} scale={0.5}>
          <mesh name="Cube001" castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['Glass Black']} />
          <mesh name="Cube001_1" castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials['Wall-white']} />
          <mesh name="Cube001_2" castShadow receiveShadow geometry={nodes.Cube001_2.geometry} material={materials.Grid} />
          <mesh name="Cube001_3" castShadow receiveShadow geometry={nodes.Cube001_3.geometry} material={materials.Plaster} />
          <mesh name="Cube001_4" castShadow receiveShadow geometry={nodes.Cube001_4.geometry} material={materials['Plaster.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model/BigLab-transformed.glb')