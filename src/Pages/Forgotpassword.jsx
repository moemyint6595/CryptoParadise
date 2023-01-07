import React, {useState} from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';
import * as MUI from '@mui/material'
import '../Styles/Pages/Forgotpassword.scss'
import BinanceLogo from '../Images/Binance_Logo.png'
import { Link } from 'react-router-dom';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ffffff',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function Forgotpassword() {

  const [ require, setRequire ] = useState('')

  return (
    <PublicLayout>
      <MUI.Box className='For-container'>
         <MUI.Box className='For-main-box' style={{height : '580px'}}>
             <MUI.Box className='logo-box'>
               <img src={BinanceLogo} alt='Logo' className='logo'/>
            </MUI.Box>
            <MUI.Box className='box1'>
              <MUI.Typography className='text1'>
                 Forgot your password?
               </MUI.Typography>
            </MUI.Box>
            <MUI.Box className='box2'>
              <MUI.Typography className='text2'>
                 Please fill in the email that you use to register. You will be sent an
                 email with instructions to how to reset your password. 
               </MUI.Typography>
            </MUI.Box>
            <MUI.Box className='Form-box' component={'form'}>
               <MUI.Box className='email-box'>
                  <MUI.ThemeProvider theme={theme}>
                     <MUI.TextField 
                       
                       id="email"
                       className='email'
                       fullWidth
                       color='primary'
                       required
                       label='Email address'
                       value={require}
                       error={!require}
                       onChange = {(e) => setRequire(e.target.value) }
                       helperText ={ !require ? 'Required' : ' '}
                       focused
                       autoComplete="off"
                       InputProps = {{
                        style : {
                          color: 'white'
                        },
                        
                       }}
                     />
                  </MUI.ThemeProvider>
                  </MUI.Box>
                <MUI.Box className='btn-box'>
                  <Link to='/success'style={{ textDecoration : 'none' }}>
                  <MUI.Button 
                   size='large'
                   variant='contained'
                   color='primary'
                   className='btn'
                   
                  >
                    send email
                    </MUI.Button>
                  </Link>
               </MUI.Box>
               <MUI.Box className='box3'>
                  <MUI.Typography className='first'>
                     Remember your password?
                  </MUI.Typography>
                  <Link to={'/login'} className='signup'>
                     <MUI.Typography className='second'>
                       Sign In
                     </MUI.Typography>
                  </Link>
               </MUI.Box>
            </MUI.Box>
         </MUI.Box>
      </MUI.Box>
    </PublicLayout>
  )
}

export default Forgotpassword