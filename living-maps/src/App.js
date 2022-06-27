import './App.css';
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Box from './components/Box';
import BackDrop from './components/Backdrop';

import "./styles/main.css";

function App() {
  return (
    <Canvas>
      <BackDrop/>
      <ambientLight></ambientLight>
      <OrbitControls/>
      <Box></Box>
    </Canvas>
  );
}

export default App;
