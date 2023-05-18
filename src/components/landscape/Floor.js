import React from 'react';
import { DoubleSide } from 'three';
import { RigidBody } from '@react-three/rapier'

function Floor() {
  // Texture
  // const [diffuse, disp, normal] = useTexture(
  //   ['./textures/terrain/forest_floor_diff_4k.jpg',
  //   './textures/terrain/forest_floor_disp_4k.png',
  //   './textures/terrain/forest_floor_nor_gl_4k.jpg'],
  //   ([diffuse, disp, normal]) => {
  //     diffuse.wrapS = diffuse.wrapT = disp.wrapS = disp.wrapT = normal.wrapS = normal.wrapT = RepeatWrapping;
  //     diffuse.repeat = disp.repeat = normal.repeat = new Vector2(20, 20);
  //   }
  // );

  return (
    <RigidBody colliders='hull' type='fixed' rotation={[-Math.PI/2, 0, 0]}>
      <mesh receiveShadow>
        <planeGeometry args={[100, 100, 10, 10]} />
        <meshPhysicalMaterial side={DoubleSide} color='grey' />
      </mesh>
    </RigidBody>
  );
}

export default Floor;