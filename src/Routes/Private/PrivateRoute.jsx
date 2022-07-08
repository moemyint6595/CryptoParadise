import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component : Component, restricted, layout : Layout, ...rest }) {

    //adminlogin logic

  return (
     <Route {...rest} render ={props =>{
         //isAdminlogin() ? 
         true ? 
         <Layout {...props} {...rest}>
             <Component {...props} />
         </Layout> : <Redirect to='/login' />
     }}/>
  )
}

export default PrivateRoute