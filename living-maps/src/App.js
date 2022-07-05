import './App.css';
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import * as THREE from "three";
import { DDSLoader } from "three-stdlib";
import Box from './components/Box';
import BackDrop from './components/Backdrop';
import CustomObject from './components/CustomObject';

import "./styles/main.css";
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());
function App() {
  return (
    <Canvas>
      <BackDrop/>
      <ambientLight></ambientLight>
      <CustomObject></CustomObject>
      <OrbitControls/>
      <CustomObject/>
    </Canvas>
  );
}

export default App;
