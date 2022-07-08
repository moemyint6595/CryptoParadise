import React,{useState} from 'react'
import '../Styles/Pages/Login.scss'
import PublicLayout from '../Layouts/Public/PublicLayout';
import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
import { Link } from 'react-router-dom';

const Login = ({smplified}) => {

  const [isVisible, setIsVisible] = useState(false)

  const clickHandler =() =>{

    setIsVisible(!isVisible)
  }

  return (
    <div>
       <PublicLayout smplified={!smplified}>

         <MUI.Stack className='login-container' spacing={2} display='flex' justifyContent='center' alignItems='center'>
           <MUI.Box className='login-wrapper'>
            <MUI.Box className='login-title-box'>
               <MUI.Typography variant='body2' className='login-title'>
                 CryptoParadise
               </MUI.Typography>
            </MUI.Box>
             <form>
              <MUI.Box className='form-container'>
                 <MUI.Box className='input-box' >
                  <MUI.TextField 
                   className='input-email' 
                   variant='outlined'
                   label='Email Address' 
                   size='small'
                   InputProps={{
                     endAdornment : <MUI.InputAdornment position='end'>
                       <MUI.IconButton>
                        <a href='https://www.gmail.com' className='a-email' >
                         <MICON.Email/>
                        </a>
                       </MUI.IconButton>
                     </MUI.InputAdornment>
                   }}
                  />
                 </MUI.Box>
                 <MUI.Box className='input-box' >
                  <MUI.TextField 
                   type={`${isVisible ? 'text' : 'password'}`}
                   className='input-email' 
                   variant='outlined'
                   label='Password' 
                   size='small'
                   InputProps={{
                     endAdornment : <MUI.InputAdornment position='end'>
                       <MUI.IconButton onClick={clickHandler}>
                         {
                          isVisible ?<MICON.Visibility className='icon'/>:<MICON.VisibilityOff className='icon' />
                         }
                       </MUI.IconButton>
                     </MUI.InputAdornment>
                   }}
                  />
                 </MUI.Box>

                 {/* <MUI.Box className='input-box' >
                  <MUI.TextField 
                   type={`${isVisible1 ? 'text' : 'password'}`}
                   className='input-email' 
                   variant='outlined'
                   label='Re-enter Password' 
                   size='small'
                   InputProps={{
                     endAdornment : <MUI.InputAdornment position='end'>
                       <MUI.IconButton onClick={clickHandler1}>
                         {
                          isVisible1 ?<MICON.Visibility className='icon'/>:<MICON.VisibilityOff className='icon' />
                         }
                       </MUI.IconButton>
                     </MUI.InputAdornment>
                   }}
                  />
                 </MUI.Box> */}
                 <MUI.Box className='login-footer-container'>
                  <MUI.Box className='footer-forget-box'>
                     <Link to='/forgetpassword' className='forgotpassword'>
                       Forgot password?
                     </Link>
                  </MUI.Box>
                  <MUI.Box className='footer-login-box'>
                    <MUI.Button variant='contained' className='footer-login'>
                      Sign In
                    </MUI.Button>
                  </MUI.Box>
                  <MUI.Box className='footer-signup-box'>
                    <MUI.Typography className='ask' variant='body2'>Haven't create accout?</MUI.Typography>
                    <Link className='signup' to='/signup'>
                      Sign Up
                    </Link>
                  </MUI.Box>
                 </MUI.Box>
              </MUI.Box>

             </form>
           </MUI.Box>
         </MUI.Stack>
       </PublicLayout>
    </div>
  )
}

export default Login