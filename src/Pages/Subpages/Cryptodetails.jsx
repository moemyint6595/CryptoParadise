import React,{useState} from 'react'
import '../../Styles/Pages/Subpages/Cryptodetail.scss'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import * as MUI from '@mui/material'
import PublicLayout from '../../Layouts/Public/PublicLayout'
import * as MICON from '@mui/icons-material';

import { MoneyCollectOutlined, 
         DollarCircleOutlined, 
         FundOutlined, 
         ExclamationCircleOutlined, 
         StopOutlined, 
         TrophyOutlined, 
         CheckOutlined, 
         NumberOutlined, 
          } from '@ant-design/icons';

//Api
import { useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } from '../../Services/CryptoApi'
import LineChart from '../../components/LineChart'
// import ApexChart from '../../components/ApexChart'

const Cryptodetails = () => {
  const { coinId} = useParams();

  const [timePeriod, setTimePeriod] = useState('3h')

  const {data, isFetching} = useGetCryptosDetailsQuery(coinId)

  const {data : coinHistory} = useGetCryptosHistoryQuery({coinId, timePeriod})

  if(isFetching) return "loading..."

  const cryptoDetails = data?.data?.coin

  const time = ['1h','3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  return (
    <>
      <PublicLayout>
         <MUI.Box className='container' >
           <MUI.Grid container className='wrapper'>
             <MUI.Grid xs={12} item className='title-box'>
                <MUI.Box className='first'>
                 <img className='img' src={cryptoDetails.iconUrl} alt="crypto_images"/>
                 <MUI.Typography variant='h5' className='title' sx={{ color : `${cryptoDetails.color}`}}>{cryptoDetails.name}</MUI.Typography>
                </MUI.Box>
                <MUI.Typography variant='h5' className='title2'>( {cryptoDetails.name} - {cryptoDetails.symbol} ) Price</MUI.Typography>
                <MUI.Box className='last'>
                 <MUI.Typography variant='body2' className='title-body'>Realtime <MUI.Typography sx={{color : `${cryptoDetails.color}`}} variant='body' className='sub-body'>{cryptoDetails.name}</MUI.Typography> price in US dollars. View all infomations.</MUI.Typography>
                </MUI.Box>
             </MUI.Grid>
             <MUI.Grid item className='chart-title-container' xs={12}>

                <MUI.Box className='chart-title-box'>
                 <img className='t-img' src={cryptoDetails.iconUrl} alt="crypto_images"/>
                 <MUI.Typography variant='h5' className='chart-title' >{cryptoDetails.name} Chart</MUI.Typography>
                 <MUI.Box className='chart-price-box'>
                   <MICON.AttachMoney  className='chart-icon'/>
                   <MUI.Typography variant='body2' className='chart-price'>Current price : {millify(cryptoDetails.price)}$</MUI.Typography>
                 </MUI.Box>
                 <MUI.Box className='chart-select-box'>
                   <MUI.FormControl fullWidth size='small'>
                     {/* <MUI.InputLabel id="demo-simple-select-label">Period</MUI.InputLabel> */}
                     <MUI.Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={timePeriod}
                          // label="Period"
                          fullWidth
                          className='chart-select'
                          onChange={(e) => setTimePeriod(e.target.value)}
                        >
                         {
                          time.map((t,i) =>{
                            return(
                              <MUI.MenuItem key={i} value={t}>
                                <MUI.Typography variant='body2' className='time'>{t}</MUI.Typography>
                              </MUI.MenuItem>
                            )
                          })
                         }
   
                     </MUI.Select>
                    </MUI.FormControl>
                 </MUI.Box>
                </MUI.Box>
             </MUI.Grid>

             <MUI.Grid item className='chart-container' xs={12}>
               <MUI.Box className='chart-box' >
                 <LineChart coinHistory={coinHistory}/>
                 {/* <ApexChart /> */}
               </MUI.Box>
             </MUI.Grid>
           </MUI.Grid>

           <MUI.Box className='stat-container'>
             <MUI.Grid container className='stat-grid-container'>
               <MUI.Grid xs={12} md={4} item className='stat-grid'>
                 <MUI.Box className='stat-box'>
                   <MUI.Typography className='stat-title' variant='h6'>{cryptoDetails.name} Value Statistics</MUI.Typography>
                   <MUI.Typography className='stat-title-text' variant='body2'> An overview described the stats of {cryptoDetails.name}</MUI.Typography>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><NumberOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Rank</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>{cryptoDetails.rank}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'> 
                       <MUI.Box><DollarCircleOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Price to USD</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>$ {millify(cryptoDetails.price)}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><TrophyOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>All-time-high</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>$ {millify(cryptoDetails.allTimeHigh.price)}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><DollarCircleOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Market Cap</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>{millify(cryptoDetails.marketCap)}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><MICON.AssessmentOutlined sx={{fontSize : '1.1rem', opacity: '0.8'}}/></MUI.Box>
                       <MUI.Typography variant='body2'>Change</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>% {millify(cryptoDetails.change)}</MUI.Typography>
                   </MUI.Box>

                 </MUI.Box>
               </MUI.Grid>
               <MUI.Grid xs={12} md={4} item ></MUI.Grid>
               <MUI.Grid xs={12} md={4} item className='stat-grid'>
                  <MUI.Box className='stat-box'>
                   <MUI.Typography className='stat-title' variant='h6'>{cryptoDetails.name} Value Statistics</MUI.Typography>
                   <MUI.Typography className='stat-title-text' variant='body2'>Showing the supply stats of all cryptocurrencies </MUI.Typography>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><FundOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Number of Market</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>{cryptoDetails.numberOfMarkets}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><MoneyCollectOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Number of Exchanges</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>{cryptoDetails.numberOfExchanges}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><ExclamationCircleOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Approved Supply</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>
                       {
                        cryptoDetails.supply.confirmed ? <CheckOutlined/> : <StopOutlined/>
                       }
                     </MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><ExclamationCircleOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Total Supply</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>{millify(cryptoDetails.supply.total)}</MUI.Typography>
                   </MUI.Box>

                   <MUI.Box className='stat-item-box'>
                     <MUI.Box className='stat-item-icon_text'>
                       <MUI.Box><ExclamationCircleOutlined/></MUI.Box>
                       <MUI.Typography variant='body2'>Circulating Supply</MUI.Typography>
                     </MUI.Box>
                     <MUI.Typography variant='body2' className='stat-item-price'>{millify(cryptoDetails.supply.circulating)}</MUI.Typography>
                   </MUI.Box>
                   
                  </MUI.Box>
               </MUI.Grid>
             </MUI.Grid>
           </MUI.Box>

           <MUI.Box className='info-container'>
             <MUI.Grid container className='info-grid-container'>
               <MUI.Grid className='info-grid-item' item xs={12} md={6} >
                 <MUI.Box className='info-title-box'>
                   <MUI.Typography  className='info-title'>
                     What is {cryptoDetails.name} ?
                   </MUI.Typography>
                   <MUI.Typography className='info-title-description'>
                     {HTMLReactParser(cryptoDetails.description)}
                     {/* {cryptoDetails.description} */}
                   </MUI.Typography>
                 </MUI.Box>
               </MUI.Grid>
                <MUI.Grid className='info-grid-item' item xs={12} md={6} >
                 <MUI.Box className='info-links-box'>
                   <MUI.Box className='info-links-title-box'>
                     <MUI.Typography sx={{color : `${cryptoDetails.color}`}} className='info-links-title' >{cryptoDetails.name} <p>Links</p></MUI.Typography>
                   </MUI.Box>
                   {
                    cryptoDetails.links?.map((link, i) =>{

                      return(
                        <MUI.Box key={i} className='info-links-item-box'>
                          <MUI.Typography className='info-type'>{link.type}</MUI.Typography>
                          <MUI.Typography 
                           href={link.url} 
                           component='a'
                           target="_blank"
                           rel="noreferrer"
                           className='info-link'
                           >{link.name}</MUI.Typography>
                        </MUI.Box>
                      )
                    })
                   }
                 </MUI.Box>
               </MUI.Grid>
             </MUI.Grid>
           </MUI.Box>

         </MUI.Box>
      </PublicLayout>
    </>
  )
}

export default Cryptodetails


