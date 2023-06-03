import React, { Fragment } from 'react';
import { PointerLockControls } from '@react-three/drei';
import { OrthographicCamera } from 'three';
import Floor from './landscape/Floor';
import { AdamChar } from './character/Adam';
import Interact from './experiment/Interact';

const cameraShadow = new OrthographicCamera(-70, 70, 70, -70, 0.1, 1000);

function Scenes() {
  return (
    <Fragment>
      {/* Controllers */}
      <PointerLockControls />

      {/* Lighting */}
      <directionalLight castShadow position={[3, 5, 8]} intensity={1.5} color='white' shadow-mapSize={[4096, 4096]} shadow-camera={cameraShadow} />

      {/* Object 3D */}
      <Floor />
      <AdamChar />
      <Interact />
    </Fragment>
  );
}

export default Scenes;