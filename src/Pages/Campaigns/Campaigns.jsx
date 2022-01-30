import React from 'react'
import Header from '../../Components/Header/Header'
import headerImg from '../../Assets/img/headers/header1.jpg'
import { Container } from 'react-bootstrap'
import CampaignCard from '../../Components/CampaignCard/CampaignCard'
import { useSelector } from 'react-redux';
import './Campaigns.scss'

const Campaigns = () => {

  const { campaigns } = useSelector(state => ({ ...state.campaigns }));
  const { status } = useSelector(state => ({ ...state.gameMasters }));

  
  return (
    <>
    <Header title='All Campaigns' image={ headerImg } />
      <Container>
        {status !== 'success' ? 'loading....' :  <div className='campaigns-cards'> {campaigns.map(campaign => <CampaignCard campaign={campaign} key={ campaign.id }/>)}</div>}      
    </Container>
    </>
  )
}

export default Campaigns
