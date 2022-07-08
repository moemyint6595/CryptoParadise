import React,{useState} from 'react'
import * as MUI from '@mui/material'
import '../../Styles/Pages/Subpages/CryptoNews.scss'

import { useGetNewsQuery } from '../../Services/CryptoNewsApi';
import { useGetCryptosQuery } from '../../Services/CryptoApi';
import { MdArrowRight } from 'react-icons/md'

import moment from 'moment';


const CryptoNews = ({simplified}) => {

    const {data : coins }  = useGetCryptosQuery(100);

  const SelectNameLists = coins?.data?.coins;

  const [newsCategory, setnewsCategory] = useState('Cryptocurrency')

  const {data : cryptoNews } = useGetNewsQuery({newsCategory, count : simplified ? 8 : 100 });

  if(!cryptoNews?.value) return 'Loading...'

  const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

  const selectHandler = (e) => {
    setnewsCategory(e.target.value)
  }

 

  return (
    <>
    {!simplified && 
         <MUI.Box className='new-select-box'>
          <MUI.FormControl fullWidth size='small'>
          <MUI.InputLabel id="select-label" className='inputlabel'>Choose news</MUI.InputLabel>
           <MUI.Select 
            labelId="select-label"
            label="Cryptocurrency"
            value={newsCategory}
            onChange={selectHandler}
            >
              <MUI.MenuItem 
               value='Cryptocurrency,Ethereum,Bitcoin'
              >All</MUI.MenuItem>
            {
              SelectNameLists?.map((coin) =>{
                return(
                  <MUI.MenuItem key={coin.uuid} value={coin.name} >
                    {coin.name}
                  </MUI.MenuItem>
                )
              })
            }
           </MUI.Select>
          </MUI.FormControl>
       </MUI.Box>
       }
      <MUI.Grid container className='cryptonew-grid-container'>
        {
          cryptoNews?.value?.map((news, i) => {
  
            return(
              <MUI.Grid className='cryptonew-grid-item' item xs={12} sm={6} md={4} lg={3} key={i} >
                <MUI.Box className='cryptonew-wrapper'>
                 <MUI.Card className='cryptonew-card-container'>
                   {/* <a href={news.url}> */}
                   <MUI.CardContent className='content-box'>
                    <MUI.Box className='title-box'>
                     <MUI.Typography className='title-text' variant='h5'>
                       {
                        news.name.substring(0, 1000)
                       }
                     </MUI.Typography>
                     <img className='image' src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news_image'/>
                    </MUI.Box>
                     <p className='p'>
                       {
                         news.description.length > 100 ? `${news.description.substring(0, 70)}...` : news.description
                       } <button className='sm-btn'><a className='btn-a' href={news.url} target='_blank' rel='noreferrer'>Read more</a><MdArrowRight/></button>
                     </p>
                     <MUI.Box className='provider-container'>
                       <MUI.Box className='provider-wrapper'>
                         <MUI.Box className='avatar-box'>
                           <MUI.Avatar className='avatar' alt='' src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } /> 
                           <MUI.Typography className='provider-text' variant='body2'>{news.provider[0]?.name.length > 10 ? `${news.provider[0]?.name.substring(0, 25)}` : news.provider[0]?.name }</MUI.Typography>
                         </MUI.Box>
                         <MUI.Typography className='moment' variant='body2' >{moment(news.dataPublished).startOf('ss').fromNow()}</MUI.Typography>
                       </MUI.Box>            
                     </MUI.Box>
                   </MUI.CardContent>
                   <MUI.CardActions>

                   </MUI.CardActions>
                   {/* </a> */}
                 </MUI.Card>
                </MUI.Box>
              </MUI.Grid>
            )
          })
        }
      </MUI.Grid>
    </>
  )
}

export default CryptoNews