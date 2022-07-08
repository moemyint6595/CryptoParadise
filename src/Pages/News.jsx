import React from 'react'
import PublicLayout from '../Layouts/Public/PublicLayout';
import CryptoNews from './Subpages/CryptoNews';

function News() {
  return (
    <PublicLayout>
    <div>
     <CryptoNews/>
    </div>
 </PublicLayout>
  )
}

export default News