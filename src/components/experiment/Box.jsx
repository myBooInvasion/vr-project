/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 Box.glb --transform --shadows --keepnames
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Boxes(props) {
  const { nodes, materials } = useGLTF('/model/Box-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="Cube" castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Black Nickel']} position={[0, 1, 0]} scale={0.4} />
    </group>
  )
}

useGLTF.preload('/model/Box-transformed.glb')
