import React,{useState, useEffect} from 'react'
import * as MUI from '@mui/material'
import '../../Styles/Pages/Subpages/Cryptocurrencies.scss'
import { useNavigate } from 'react-router-dom'
import millify from 'millify';

import { useGetCryptosQuery } from '../../Services/CryptoApi'

const CryptoCurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100 ;

  const navigate = useNavigate();

  const {data , isFetching} = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() =>{

    const filteredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    setCryptos(filteredData)

  },[search, data])

  if(isFetching) return 'Loading...';

  return (
    <>
       {!simplified && 
         <MUI.Box className='crypto-search-box'>
          <MUI.TextField className='crypto-search' variant='filled' size='small' label='Search Cryptos...' type='text' onChange={(e) => setSearch(e.target.value)}/>
       </MUI.Box>
       
       }
      <MUI.Grid container className='currency-grid-container'>
         {
          cryptos?.map((currency) => {
            return(
              <MUI.Grid xs={12} sm={6} md={4} lg={3} key={currency.uuid} item className='currency-grid-item'>
                <MUI.Box className='currency-wrapper' component='div'>
                   <MUI.Box className='currency-box'>
                     <MUI.Box className='title-box'>
                       <MUI.Typography className='title'>{`${currency.rank}. ${currency.name}`}</MUI.Typography>
                       <MUI.Box><img className='image' src={currency.iconUrl} alt='currency_image'/></MUI.Box>
                     </MUI.Box>
                     <MUI.Box className='body-box'>
                      <MUI.Typography component='p'>Price : {millify(currency.price)}</MUI.Typography>
                       <MUI.Typography component='p'>Market Cap : {millify(currency.marketCap)}</MUI.Typography>
                       <MUI.Typography component='p'>Daily Change : {millify(currency.change)}%</MUI.Typography>
                     </MUI.Box>
                     <MUI.Box className='footer-box'>
                       <MUI.Button variant='contained' size='small' className='details' sx={{backgroundColor : currency.color }} 
                        onClick={() => navigate(`/crypto/${currency.uuid}`)}
                       >Details</MUI.Button>
                       <MUI.Button variant='contained' size='small' className='infos' ><a href={currency.coinrankingUrl} target="_blank" rel="noreferrer" >Infos</a></MUI.Button>
                     </MUI.Box>
                   </MUI.Box>
                </MUI.Box>
              </MUI.Grid>
            )
          })
         }
      </MUI.Grid>
    </>
  )
}

export default CryptoCurrencies