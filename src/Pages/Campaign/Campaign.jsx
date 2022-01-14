import React from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import CampaignInfo from '../../Components/CampaignInfo/CampaignInfo';
import Header from '../../Components/Header/Header';
import './Campaign.scss';

const Campaign = () => {

  const location = useLocation();
  const { data } = location.state;
  const campaign = data.campaign
  const master = data.master;
  const freePlaces = data.freePlaces;

  return (
    <div className='post single-campaign'>
      <Header title={campaign.name} image={campaign.image} />
      <Container>
        <div className="content">
          <p className='full-desc'> {campaign.desc} </p>
          <div className="divider"></div>
          <CampaignInfo avatar={master.avatar} nick={master.nick} freePlaces={freePlaces} playersNumber={ campaign.playersNumber }/>
        </div>
        <div className="join-form">
          <div className="title">
            <h3>Sounds interesting?</h3>
          <h2>Join now!</h2>
          </div>
          
        </div>
      </Container>
    </div>

  )
}

export default Campaign
