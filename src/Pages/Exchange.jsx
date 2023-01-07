import React from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';
import Sorry from '../Images/sorry.jpg'

function Exchange() {
  return (
    <PublicLayout>
      <div style={{ width : '100%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
        <h1 style={{ marginTop : '1rem', color : 'white'}}>
            APIs unavailable for beta vision
          </h1>
      </div>
       <img src={Sorry} style={{
          height : '10rem',
          width : '10rem',
          position : 'absolute',
          left : '42%',
          top : '200px'
       }} 
       alt='img'
       />
    </PublicLayout>
  )
}

export default Exchange