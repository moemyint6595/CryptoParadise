import React from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';

import * as MUI from '@mui/material'
import '../Styles/Pages/Forgotpassword.scss'
import BinanceLogo from '../Images/Binance_Logo.png'



function Forgotsuccess () {
  return (
    <PublicLayout>
      <MUI.Box className='For-container'>
         <MUI.Box className='For-main-box' style={{ height : '400px'}}>
           
            <MUI.Box className='logo-box'>
               <img src={BinanceLogo} alt='Logo' className='logo'/>
            </MUI.Box>

            <MUI.Box className='box2'>
              <MUI.Typography className='text2'>
                 An email has been sent to your email address with instructions how to reset your password.
               </MUI.Typography>
            </MUI.Box>

            <MUI.Box className='Form-box' component={'form'}>
                <MUI.Box className='btn-box'>
                  <a href='https://mail.google.com/mail' target='_blank' rel="noreferrer"style={{ textDecoration : 'none' }}>
                  <MUI.Button 
                   size='large'
                   variant='contained'
                   color='primary'
                   className='btn'
                   
                  >
                    Go to email
                    </MUI.Button>
                  </a>
               </MUI.Box>
            </MUI.Box>


         </MUI.Box>
      </MUI.Box>
    </PublicLayout>
  )
}

export default Forgotsuccess 