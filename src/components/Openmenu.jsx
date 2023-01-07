import React from 'react'
import * as MUI from '@mui/material'
import '../Styles/compnenets/Openmenu.scss'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toggleopen } from '../Redux/Openmenuslice'

const Openmenu = () => {

  const toggleState = useSelector(state => state.opentoggle)

  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(toggleopen())
  }

  return (
    <>
      <MUI.Box className={`openmenu-container openmenu-${toggleState ? 'open' : 'close'}`} component='aside'>
        <MUI.Box className='icon-container' onClick={clickHandler}>
          <FaTimes className='icon' />
        </MUI.Box>

        <MUI.Box className='sidebar-wrapper'>
          <ul className='sidebar-menu'>
            <MUI.Typography >
              <Link to='/' className='sidebar-link' onClick={clickHandler}>
                <div className='p'>Home</div>
              </Link>
            </MUI.Typography>
            <MUI.Typography >
              <Link to='/crypto' className='sidebar-link' onClick={clickHandler}>
              <div className='p'>Crypto</div>
              </Link>
            </MUI.Typography>
            <MUI.Typography >
              <Link to='/exchange' className='sidebar-link' onClick={clickHandler}>
              <div className='p'>Exchanges</div>
              </Link>
            </MUI.Typography>
            <MUI.Typography >
              <Link to='/news' className='sidebar-link' onClick={clickHandler}>
              <div className='p'>News</div>
              </Link>
            </MUI.Typography>
          </ul>
          <MUI.Box className='sidebar-signin-wrap' >
            <MUI.Typography>
              <Link to='/login' className='sidebar-signin-btn' onClick={clickHandler}>
                Login In
              </Link>
            </MUI.Typography>
          </MUI.Box>
        </MUI.Box>
      </MUI.Box>
    </>
  )
}

export default Openmenu