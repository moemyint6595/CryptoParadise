import React,{Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import './HomeSectionAnime.css';
import Model from './Model';
import SpotLights from './SpotLights';
import Ground from './Ground';
import Ethmodel from './Ethmodel';

const HomeSectionShow = () =>{
  return(
    <>
      {/* <color args={[0, 0, 0]} attach='background' /> */}
        <SpotLights />
        <Model />
        {/* <Ethmodel /> */}
        <Ground />
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={1.4} minZoom={1}/>
    </>
  )
}

const HomeSectionAnime = () => {

  return (
    <Suspense fallback={null}>
       <Canvas shadows camera={{fov : 40}}>
         <HomeSectionShow />
       </Canvas>
    </Suspense>
  )
}

export default HomeSectionAnime