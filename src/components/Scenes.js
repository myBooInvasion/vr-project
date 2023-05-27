import React, { Fragment } from 'react';
import { OrbitControls } from '@react-three/drei';
import { OrthographicCamera } from 'three';
import Floor from './landscape/Floor';
import { AdamChar } from './character/Adam';
import { Door } from './experiment/Door';

const cameraShadow = new OrthographicCamera(-70, 70, 70, -70, 0.1, 1000);

function Scenes() {
  return (
    <Fragment>
      <OrbitControls />
      <directionalLight castShadow position={[3, 3, 8]} intensity={1.5} color='white' shadow-mapSize={[4096, 4096]} shadow-camera={cameraShadow} />
      <Floor />
      <AdamChar />
      <Door />
    </Fragment>
  );
}

export default Scenes;