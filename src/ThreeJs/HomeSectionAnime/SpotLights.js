import React from 'react'

const col = [1, 0.84, 0]

const SpotLights = () => {
  return (
    <>
        <spotLight 
          color={col}
          intensity={2}
          angle={0.6}
          penumbra={0}
          position={[5, 5, 5]}
           castShadow
         />

        <spotLight 
         color={col}
         intensity={2}
         angle={0.6}
         penumbra={0}
         position={[-5, 5, 5]}
         castShadow
        />
         <spotLight 
         color={col}
         intensity={2}
         angle={0.6}
         penumbra={0}
         position={[-5, 5, -5]}
         castShadow
        />

         <spotLight 
         color={col}
         intensity={2}
         angle={0.6}
         penumbra={0}
         position={[5, 5, -5]}
         castShadow
        />
    </>
  )
}

export default SpotLights