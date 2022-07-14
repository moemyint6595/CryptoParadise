import React from 'react'
import '../Styles/compnenets/Footer.scss'
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Footer = () => {

  const Menu = [
    {name : 'Home', routes : '/'},
    {name : 'Crypto', routes : '/crypto'},
    {name : 'Exchange', routes : '/exchange'},
    {name : 'News', routes : '/news'}
  ]

  const Terms = [
    {name : 'About us', routes : '/aboutus'},
    {name : 'Terms and Conditions', routes : '/terms'},
    {name : 'Privacy Policy', routes : '/privacy'},
    {name : 'Contact Address', routes : '/contactaddress'}
  ]


  return (
    <>
     <MUI.Box className='footer-container'>
         <MUI.Grid container gap={2} className='footer-wrapper'>
             <MUI.Grid className='grid-item' item xs={12} sm={12} md={3}>
               <MUI.Typography className='header' variant='h5'>WEBSITE MENU</MUI.Typography>
               {
                Menu.map((menu, i) => {
                  return(
                    <Link key={i} className='link' to={menu.routes}>
                      <MUI.Typography variant='h5' className='body'>{menu.name}</MUI.Typography>
                    </Link>
                  )
                })
               }
             </MUI.Grid>
             <MUI.Grid className='grid-item' item xs={12} sm={12} md={3}>
               <MUI.Typography className='header' variant='h5'>TERMS</MUI.Typography>
               {
                Terms.map((menu, i) => {
                  return(
                    <Link key={i} className='link' to={menu.routes}>
                      <MUI.Typography variant='h5' className='body'>{menu.name}</MUI.Typography>
                    </Link>
                  )
                })
               }
             </MUI.Grid>
             <MUI.Grid className='grid-item' item xs={12} sm={12} md={3}>
               <MUI.Box className='social-box'>
                 <MUI.Box className='socials'>
                  <MICON.Facebook className='fb'/>
                  <MICON.Reddit className='re'/>
                  <MICON.Twitter className='tw'/>
                  <MICON.WhatsApp className='wh'/>
                  <MICON.LinkedIn className='li'/>
                 </MUI.Box>
                 <MUI.Box className='social-search-box'>
                  TEST
                 </MUI.Box>
               </MUI.Box>
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

