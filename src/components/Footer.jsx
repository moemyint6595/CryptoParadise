import React from 'react'
import '../Styles/compnenets/Footer.scss'
import * as MUI from '@mui/material'

const Footer = () => {

  return (
    <>
     <MUI.Box className='footer-container'>
         <MUI.Grid container className='footer-wrapper'>
             <MUI.Grid className='grid-item' item xs={12} sm={4}>
               
             </MUI.Grid>
             <MUI.Grid className='grid-item' item xs={12} sm={4}>
               
             </MUI.Grid>
             <MUI.Grid className='grid-item' item xs={12} sm={4}>
              
             </MUI.Grid>
         </MUI.Grid>
     </MUI.Box>
     <MUI.Box className='footer-bot'>
           CryptoVerse @2022 All Right Reserved 
         </MUI.Box>
    </>
  )
}

export default Footer