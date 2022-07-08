import React from 'react'
import '../Styles/All.scss'
import { useNavigate } from 'react-router-dom'

function Project() {
    const navigate = useNavigate()
  return (
    <div className='project-container'>

         {/* admin project */}
        <div className='admin-project' onClick={() => navigate('adminproject')}>
            <p>Admin Panel Project</p>
        </div>
        
    </div>
  )
}

export default Project