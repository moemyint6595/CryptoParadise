import React from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';
import '../Styles/Pages/Exchange.scss'
import { Container, Box} from '@mui/material'

function Exchange() {
  return (
    <PublicLayout>
       <Container className='exchange-container'>
           <Box>
             **Upgrade to Premium plan**
          </Box>
          <Box>
              APIs Unavailable
          </Box>
       </Container>
 </PublicLayout>
  )
}

export default Exchange