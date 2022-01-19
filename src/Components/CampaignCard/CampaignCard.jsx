import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import './CampaignCard.scss';
import { NavLink } from 'react-router-dom';
import CampaignInfo from '../CampaignInfo/CampaignInfo';
import { selectGameMasters } from '../../Redux/gameMastersSlice'

const CampaignCard = ({ campaign }) => {
  const gameMasters = useSelector(selectGameMasters).gameMasters;
  const curMaster = gameMasters.filter(master => master.id === campaign.gameMasterId);
  const freePlaces = campaign.playersNumber - campaign.playersID.length;
  return (
    <Card>
      <div className="card-img">
        <Card.Img variant="top" src={ campaign.image } />
      </div>
      <Card.Body>
        <Card.Title>{ campaign.name }</Card.Title>
        <CampaignInfo avatar={ curMaster[0].avatar } nick={ curMaster[0].nick } freePlaces={ freePlaces } />
         <Card.Text>
          { campaign.desc }  
        </Card.Text>
        {freePlaces > 0 &&
          <NavLink to={`/campaigns/${campaign.name.toLowerCase().replace(' ', '')}-${campaign.id}`} state={{ data: { campaign: campaign, master: curMaster[0], freePlaces } }}><Button className='full-width dark'>Join now!</Button></NavLink>
        }
        {freePlaces <= 0 &&
          <Button className='full-width dark disabled' aria-disabled="true" tabIndex="-1" >Join now!</Button>
        }
      </Card.Body>
    </Card>
  )
}

export default CampaignCard
