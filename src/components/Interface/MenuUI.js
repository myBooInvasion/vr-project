import React from 'react';
import '../../styling/MenuUI.css';
import { Html } from '@react-three/drei';
import { DoubleSide } from 'three';

const MenuUI = (props) => {
  return (
    <mesh position={[0, 0.5, 0]}>
      <planeGeometry args={[1, 1]} />
      <meshPhysicalMaterial side={DoubleSide} opacity={0} />
      <Html center transform fullscreen>
        <div style={{ backgroundColor: 'white', width: '40px', height: '40px' }}>
          <p style={{ fontSize: '2px' }}>{props.name || 'Hello'}</p>
          <p style={{ fontSize: '2px' }}>{props.title || 'world'}</p>
        </div>
      </Html>
    </mesh>
  );
}

export default MenuUI;