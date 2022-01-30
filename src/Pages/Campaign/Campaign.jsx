import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import CampaignInfo from '../../Components/CampaignInfo/CampaignInfo';
import Header from '../../Components/Header/Header';
import './Campaign.scss';
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from '../../Components/Modal/LoginModal';
import SignUpToCampaignModal from '../../Components/Modal/SignUpToCampaignModal';
import { getCampaigns } from '../../Redux/campaignsSlice';
import { getGameMasters } from '../../Redux/gameMastersSlice';

const Campaign = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = location.state;
  const { campaigns } = useSelector(state => ({ ...state.campaigns }));
  const { status } = useSelector(state => ({ ...state.gameMasters }));

  if (status === null) {
    dispatch(getCampaigns())
    dispatch(getGameMasters())
  }

  const campaign = campaigns.filter(item => item.id === data.campaignId)[0];
  const master = data.master;
  const user = useSelector(state => state.user);

  return (
    <div className='post single-campaign'>
      {status !== "success" ? "Loading..." : (
        <>
        <Header title={campaign.name} image={campaign.image} />
      <Container>
        <div className="content">
          <p className='full-desc'> {campaign.desc} </p>
          <div className="divider"></div>
          <CampaignInfo avatar={master.avatar} nick={master.nick} freePlaces={campaign.playersNumber - campaign.playersID.length} playersNumber={ campaign.playersNumber }/>
        </div>
        <div className="join-form">
          <div className="title">
            <h3>Sounds interesting?</h3>
            <h2>Join now!</h2>
            {user.isLogged && campaign.playersNumber - campaign.playersID.length > 0 && <SignUpToCampaignModal campaign={campaign} user={user.user} />}
            {user.isLogged && campaign.playersNumber - campaign.playersID.length < 1 && <Button>No free places</Button> }
            {!user.isLogged && <div>
              <p>You must be logged in to sign up for the campaign</p>
              <LoginModal />
            </div>} 
          </div>
        </div>
      </Container>
        </>
       )}
      
    </div>

  )
}

export default Campaign
