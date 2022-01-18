import React from 'react'
import Header from '../../Components/Header/Header'
import headerImg from '../../Assets/img/headers/header1.jpg'
import { Container } from 'react-bootstrap'
import CampaignCard from '../../Components/CampaignCard/CampaignCard'
import { useDispatch, useSelector } from 'react-redux';
import './Campaigns.scss'
import { selectCampaigns } from '../../Redux/campaignsSlice'

const Campaigns = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector(selectCampaigns);
  
  return (
    <>
    <Header title='All Campaigns' image={ headerImg } />
      <Container>
        {campaigns.status === 'pending' ? 'loading....' :  <div className='campaigns-cards'> {campaigns.campaings.map(campaign => <CampaignCard campaign={campaign} key={ campaign.id }/>)}</div>}      
    </Container>
    </>
  )
}

export default Campaigns
