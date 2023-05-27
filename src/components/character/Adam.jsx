/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 Adam.glb --transform --shadows --keepnames
*/

import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei';
import { BallCollider, RigidBody, quat, vec3 } from '@react-three/rapier';
import { Vector3 } from 'three';


const vectorMovement = new Vector3();

export function AdamChar(props) {
  // Refs
  const group = useRef();
  const adamRef = useRef();

  // useGLTF
  const { nodes, materials, animations } = useGLTF('/model/Adam-transformed.glb');
  const { actions } = useAnimations(animations, group);

  // Keyboard controls
  const [subKey, getKey] = useKeyboardControls();

  // Local state
  const [pose, setPose] = useState('Idle');

  // Effect
  useEffect(() => {
    actions[pose].reset().fadeIn(0.5).play();

    return () => {
      actions[pose].fadeOut(0.5);
    }
  }, [pose, actions]);
  useEffect(() => {
    return subKey(state => state, (pressed) => {
      if (pressed.forward) {
        setPose('Walking');
      }
      if (pressed.backward) {
        setPose('Backward');
      }
      if (pressed.left) {
        setPose('Left');
      }
      if (pressed.right) {
        setPose('Right');
      }
      if (Object.values(pressed).every(key => !key)) {
        setPose('Idle');
      }
    });
  }, [subKey]);

  // Frame loop
  useFrame((state, delta) => {
    // Update everything on each frame
    const offsetCam = new Vector3(0, 1.3, -0.3);

    // Movement
    moveCharacter(delta, state.camera, offsetCam);
  });

  // Movement character function
  function moveCharacter(delta, camera, offset) {
    const { forward, backward, left, right } = getKey();
    const camRotation = camera.quaternion;
    const adamVelocity = adamRef.current.linvel();
    const adamRotation = adamRef.current.rotation();
    const adamPosition = adamRef.current.translation();

    offset.applyQuaternion(quat({ ...adamRotation }));
    offset.add(vec3({ ...adamPosition }));
    vectorMovement.set(right - left, 0, backward - forward).multiplyScalar(10 * delta).normalize();
    vectorMovement.applyQuaternion(quat({ ...adamRotation }));

    // camera.position.copy(offset);
    adamRef.current.setRotation(quat({ x: adamRotation.x, y: camRotation.y, z: adamRotation.z, w: camRotation.w }))
    adamRef.current.setLinvel(vec3({ x: vectorMovement.x, y: adamVelocity.y, z: vectorMovement.z }), true);
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <RigidBody ref={adamRef} colliders={false} type='dynamic' position={[0, 2, 1]} lockRotations name='adamBody'>
          <group name="Armature" rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.009}>
            <primitive object={nodes.mixamorig7Hips} />
            <skinnedMesh castShadow name="Ch08_Beard" geometry={nodes.Ch08_Beard.geometry} material={materials.Ch08_hair} skeleton={nodes.Ch08_Beard.skeleton} />
            <skinnedMesh castShadow name="Ch08_Body" geometry={nodes.Ch08_Body.geometry} material={materials.Ch08_body} skeleton={nodes.Ch08_Body.skeleton} />
            <skinnedMesh castShadow name="Ch08_Eyelashes" geometry={nodes.Ch08_Eyelashes.geometry} material={materials.Ch08_hair} skeleton={nodes.Ch08_Eyelashes.skeleton} />
            <skinnedMesh castShadow name="Ch08_Hair" geometry={nodes.Ch08_Hair.geometry} material={materials.Ch08_hair} skeleton={nodes.Ch08_Hair.skeleton} />
            <skinnedMesh castShadow name="Ch08_Hoodie" geometry={nodes.Ch08_Hoodie.geometry} material={materials.Ch08_body1} skeleton={nodes.Ch08_Hoodie.skeleton} />
            <skinnedMesh castShadow name="Ch08_Pants" geometry={nodes.Ch08_Pants.geometry} material={materials.Ch08_body1} skeleton={nodes.Ch08_Pants.skeleton} />
            <skinnedMesh castShadow name="Ch08_Sneakers" geometry={nodes.Ch08_Sneakers.geometry} material={materials.Ch08_body1} skeleton={nodes.Ch08_Sneakers.skeleton} />
          </group>
          <BallCollider args={[0.4]} position={[0, 0.4, 0]} friction={0} />
        </RigidBody>
      </group>
    </group>
  );
}

useGLTF.preload('/model/Adam-transformed.glb');