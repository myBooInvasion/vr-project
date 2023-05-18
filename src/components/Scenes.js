import React, { Fragment } from 'react';
import { PointerLockControls } from '@react-three/drei';
import { OrthographicCamera } from 'three';
import Floor from './landscape/Floor';
import { AdamChar } from './character/Adam';
import { Labor } from './Laboratory/Labor';
import { Door } from './experiment/Door';

const cameraShadow = new OrthographicCamera(-20, 20, 20, -20, 0.1, 1000);

function Scenes() {
  return (
    <Fragment>
      <PointerLockControls />
      <directionalLight castShadow position={[3, 5, 6]} intensity={1.5} color='#FCE570' shadow-mapSize={[2048, 2048]} shadow-camera={cameraShadow} />
      <Floor />
      <AdamChar />
      <Labor />
      <Door />
    </Fragment>
  );
}

export default Scenes;