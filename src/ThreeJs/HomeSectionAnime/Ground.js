import React,{useEffect, useRef} from 'react'
import { TextureLoader, RepeatWrapping, LinearEncoding } from 'three'
import { useLoader } from '@react-three/fiber'
import { useFrame  } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'

const Ground = () => {

  const ground = useRef();

    const [roughness, normal ] = useLoader(TextureLoader, [
      process.env.PUBLIC_URL + "textures/terrain-roughness.jpg",
      process.env.PUBLIC_URL + "textures/terrain-normal.jpg",
  ]);
  useEffect(() => {
      [normal, roughness].forEach((t) => {
        t.wrapS = RepeatWrapping;
        t.wrapT = RepeatWrapping;
        t.repeat.set(5, 5);
      });
  
      normal.encoding = LinearEncoding;
    }, [normal, roughness]);

    useFrame((state) => {
       
    })
  
    return(
      <mesh rotation={[-Math.PI/2, 0, 0 ]} castShadow receiveShadow ref={ground} position={[0, 0 , 0]}>
      <sphereGeometry args={[0.5, 200]} />
      <MeshReflectorMaterial
       normalMap={normal}
       normalScale={[0.15, 0.15]}
       roughnessMap={roughness}
       envMapIntensity={0}
       dithering={true}
       color={[0.015, 0.015, 0.015]}
       roughness={0.7}
       blur={[1000, 400]}
       mixBlur={30}
       mixStrength={80}
       mixContrast={1}
       resolution={1024}
       mirror={0}
       depthScale={0.01}
       minDepthThreshold={0.9}
       maxDepthThreshold={1}
       depthToBlurRatioBias={0.25}
       debug={0}
       reflectorOffset={0.2}
      />
      {/* <meshStandardMaterial color={[0, 0, 0]}  /> */}
      </mesh>
    )
  }

export default Ground