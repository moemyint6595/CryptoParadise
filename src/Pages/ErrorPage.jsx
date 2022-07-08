import React from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';

function ErrorPage() {
  return (
    <PublicLayout>
      <div style={{ width : '100%', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
        <h1 style={{ marginTop : '1rem'}}>
           404 Page Not Found!
          </h1>
      </div>
       
    </PublicLayout>
  )
}

export default ErrorPage