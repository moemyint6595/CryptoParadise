import React, { Component } from 'react'
import './Layout.scss'
// import * as MUI from '@mui/material'
import Openmenu from '../../components/Openmenu'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { Box, Container } from '@mui/material'

export class PublicLayout extends Component {
  render() {
    
    return (
      
      <React.Fragment>

        <Container className='container'>

         <Openmenu/>
         
         <Navbar smplified={this.props.smplified}/>
         <Box className='layout-container'>
            {this.props.children}
            <Box className='footer-box'>
               <Footer/>
             </Box>
          </Box>

        </Container>
      </React.Fragment>
    )
  }
}


export default PublicLayout

// sx={{ marginTop: { xs: '6rem', sm: '10rem' } }}

