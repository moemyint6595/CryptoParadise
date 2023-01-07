import React from 'react'
import '../Styles/compnenets/Navbar.scss'
import { FaBars } from 'react-icons/fa'
import logo from '../Images/Binance_Logo.png'

import * as MUI from '@mui/material'
import * as MICON from '@mui/icons-material'
// import Openmenu from './Openmenu';

import {  NavLink, Link, useNavigate, } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleopen } from '../Redux/Openmenuslice'

function Navbar({smplified}) {

const dispatch = useDispatch()

const navigate = useNavigate()

  return (
    <>
    {/* <MUI.Box className='openmenu'>
       <Openmenu />
    </MUI.Box> */}
    <MUI.Box className='top'>
     <MUI.Box className='top-container'>
         <MUI.Box className='contact-box'>
             <MUI.Box className='mail-box'>
                 <MICON.Email className='mail'/>
                 <MUI.Typography variant='body2' className='mail-text'>Cryptoparadise.trade@gmail.com</MUI.Typography>
             </MUI.Box>
             <MUI.Box className='phone-box'>
                 <MICON.Phone />
                 <MUI.Typography variant='body2' className='phonenumber'>+959 456109875</MUI.Typography>
             </MUI.Box>
         </MUI.Box>
         <MUI.Box className='search-box'>
             <MUI.Typography variant='body2' className='search-text'>Trade Everywhere</MUI.Typography>
             {/* <MUI.Box className='s-box'>
                 <MICON.Search className='icon'/>
               <input type='text' 
                placeholder='Search...'
                className='search'
             />
             </MUI.Box> */}
         </MUI.Box>
    </MUI.Box>
     </MUI.Box>

     <MUI.Box className='navbar-container' component='nav'>
         <MUI.Box className='open-menu' component='div' onClick={() => dispatch(toggleopen())}>
             <FaBars/>
         </MUI.Box>
       <MUI.Box className='navbar-wrapper'>
           <MUI.Box style={{ display : 'flex', justifyContent : 'center', alginItem : 'center', marginLeft : '10px'}}>
                <img src={ logo  } alt='logo'style={ { height : '2.8rem', width : 'auto'}}/>
                <Link to='/' className='title-link' >
                    <MUI.Typography variant='h5' className='title'>
                        CryptoParadise
                    </MUI.Typography>
                </Link>
            </MUI.Box>
           <MUI.Box className='menu-container'>
               <MUI.Box className='menu1'>
                   <NavLink to='/' className='menu-item'>
                      <MUI.Typography variant='body2' className='home'>
                          Home
                      </MUI.Typography>
                   </NavLink>
               </MUI.Box>
               <MUI.Box className='menu2'>
                   <Link to='/crypto' className='menu-item'>
                      <MUI.Typography variant='body2' className='cryptocurrency'>
                          Crypto
                      </MUI.Typography>
                   </Link>
               </MUI.Box>
               <MUI.Box className='menu3'>
                   <Link to='/exchange' className='menu-item'>
                     <MUI.Typography variant='body2' className='exchanges'>
                          Exchanges
                      </MUI.Typography>
                   </Link>
               </MUI.Box>
               <MUI.Box className='menu4'>
                   <Link to='/news' className='menu-item'>
                      <MUI.Typography variant='body2' className='news'>
                          News
                      </MUI.Typography>
                   </Link>
               </MUI.Box>
           </MUI.Box>
           
           {
             !smplified ?   <MUI.Box className='login-box' >
             <MUI.Box className='login-wrapper'>
                 <MUI.Box className='login-link' component='div' onClick={() => navigate('/login')}>
                   <MUI.Typography variant='body2' className='login'>
                       LogIn
                    </MUI.Typography>
                 </MUI.Box>
             </MUI.Box>
             </MUI.Box> : <div className='login-A'>LOGIN</div>
           }
           
        </MUI.Box>
    </MUI.Box>
    </>
  )
}

export default Navbar;

