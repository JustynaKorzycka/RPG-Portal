import React from 'react'
import Header from '../../Components/Header/Header'
import headerImg from '../../Assets/img/headers/header1.jpg'
import { Container } from 'react-bootstrap'
import CampaignCard from '../../Components/CampaignCard/CampaignCard'
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../Hooks/useFetch';
import { gameMastersFetching } from '../../Redux/Actions';
import './Campaigns.scss'

const Campaigns = ({ campLoading }) => {
  const dispatch = useDispatch();
  const campaigns = useSelector(state => state.campaigns)
  
  const { data, loading } = useFetch('http://localhost:3000/users');

  if (data && !loading) {
    dispatch(gameMastersFetching(data.filter(item=>item.userType==='gameMaster')));  
  }

  return (
    <>
    <Header title='All Campaigns' image={ headerImg } />
      <Container>
        {campLoading && 'loading...'}
        {campaigns && 
        <div className='campaigns-cards'>
            {campaigns.map(campaign => <CampaignCard campaign={campaign} key={ campaign.id }/>)}
          </div>
        }
    </Container>
    </>
  )
}

export default Campaigns
