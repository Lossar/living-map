import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


export default function CustomObject(props) {
    const [active, setActive] = useState(false)
    const [size, setSize] = useState(1)
    const maxSize = 1.5
    const minSize = 1

    const mesh = useRef();

    useFrame((state, delta) => {
        if(!active && size > minSize)
        setSize(size-0.01)
        if(active && size < maxSize)
         setSize(size+0.11)})
    
    
    const materials = useLoader(MTLLoader, "sonora.mtl")
    const obj = useLoader(OBJLoader, "sonora.obj", (loader) => {
        materials.preload();
        console.log("preload")
        loader.setMaterials(materials);
    });
  
    return <primitive object={obj} position={[0,0,0]} 
    onClick={(event) => setActive(!active)} scale={size} ref={mesh}>
    </primitive>;
}