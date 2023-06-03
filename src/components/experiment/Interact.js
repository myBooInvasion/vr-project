import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Raycaster, Vector2, Vector3 } from 'three';
import { RayGrab } from '@react-three/xr';

const ray = new Raycaster();

function Interact() {

  // Local state
  const [lock, setLock] = useState(null);
  console.log('lock', lock);

  // useFrame
  useFrame((state, delta) => {
    const camera = state.camera;
    const offsetTarget = new Vector3(0, 0.1, -0.5);
    ray.setFromCamera(new Vector2(0, 0), camera);
    ray.far = 2;
    const intersects = ray.intersectObjects(state.scene.children, true);

    if (intersects.length > 0) {
      intersects.forEach(obj => {
        if (obj.object.userData.type === 'target' && lock) {
          const adamBody = state.scene.getObjectByName('adamBody');
          grabTarget(obj.object, offsetTarget, camera, adamBody);
        } else if (obj.object.userData.type === 'target' && lock === false) {
          obj.object.position.set(0, 0.1, 0);
        }
      });
    }
  });

  const grabTarget = (object, offset, cam, adam) => {
    offset.applyQuaternion(cam.quaternion);
    offset.add(cam.position);
    object.position.copy(offset);
  }

  return (
    <RayGrab>
      <mesh name='meshBox' position={[-1, 0.1, 0]}
        userData={{ type: 'target', status: lock? 'locked' : 'unlocked' }}
        onClick={() => {
          if (lock === null) {
            setLock(true);
          } else {
            setLock(!lock);
          }
        }}
      >
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color='red' />
      </mesh>
    </RayGrab>
  );
}

export default Interact;