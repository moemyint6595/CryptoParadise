import React,{useEffect} from 'react'

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from 'three';

const Ethmodel = () => {

    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "Models/ethereum/scene.gltf"
    );

    useEffect(() => {
        gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.position.set(0, 0.2, 1.5);
        gltf.scene.traverse((object) => {
          if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 20;
          }
        });
      }, [gltf]);

      useFrame((state, delta) => {
        let t = state.clock.getElapsedTime() * 0.4;
        gltf.scene.position.set()
      })


    return <primitive object={gltf.scene} />
}

export default Ethmodel