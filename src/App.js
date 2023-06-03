import { Canvas } from '@react-three/fiber';
import Scenes from './components/Scenes';
import { Debug, Physics } from '@react-three/rapier';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useMemo } from 'react';
import { Environment, KeyboardControls } from '@react-three/drei';
import { VRButton, XR, Controllers } from '@react-three/xr';

function App() {
  const keyMapping = useMemo(() => [
    { name: 'forward', keys: ['w'] },
    { name: 'backward', keys: ['s'] },
    { name: 'left', keys: ['a'] },
    { name: 'right', keys: ['d'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['ShiftLeft'] },
    { name: 'action', keys: ['f'] },
    { name: 'reset', keys: ['r'] }
  ], []);

  return (
    <div className="canvas-container">
      <div className='corshair'><ion-icon size="large" name="add-circle-outline"></ion-icon></div>
      <VRButton sessionInit={{optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers']}} />
      <Canvas
        camera={{ position: [0, 2, 3] }}
        shadows='soft'
      >
        <Environment files={'/model/forgotten_miniland_4k.hdr'} background />

        <XR referenceSpace='local'>
          <Suspense fallback={null}>
            <Controllers rayMaterial={{ color: 'blue' }} />
            <Physics colliders={false}>
              <Debug />
              <KeyboardControls map={keyMapping}>
                <Scenes />
              </KeyboardControls>
            </Physics>
          </Suspense>
        </XR>
      </Canvas>
      <ToastContainer autoClose={false} hideProgressBar position='bottom-left' theme='dark' />
    </div>
  );
}

export default App;
