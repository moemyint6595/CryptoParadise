import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PubLicRoute({component : Component, restricted, layout : Layout , ...rest }) {

    //isAdminLogin logic 

  return (
    <Route {...rest} render ={props =>{ 
        (restricted && //isAdminLogin ? 
         true 
        ) ? 
        <Redirect to='/privatepage' /> : <Layout>
            <Component/>
        </Layout>
    }}/>
  )
}

export default PubLicRoute