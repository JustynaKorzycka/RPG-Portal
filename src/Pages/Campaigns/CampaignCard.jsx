import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import './Campaigns.scss';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const gameMasters = useSelector(state => state.gameMasters);
  const curMaster = gameMasters.filter(master => master.id === campaign.gameMasterId);
  const freePlaces = campaign.playersNumber - campaign.bookedPlaces;
  return (
    <Card>
      <div className="card-img">
        <Card.Img variant="top" src={ campaign.image } />
      </div>
      <Card.Body>
        <Card.Title>{ campaign.name }</Card.Title>
        <div className="info">
            <div className="master"> 
             <div className="avatar"><img src={ curMaster[0].avatar } alt='avatar' /></div>
              <h6>{curMaster[0].nick}</h6>
          </div>
          <div className="places">
            <p>Available  places: <span>{ freePlaces }</span></p>
            {freePlaces > 0 ? <AiFillCheckCircle color='green' size={20} /> : <AiFillCloseCircle color='red' size={20}/> }  
          </div> 
        </div>
         <Card.Text>
          { campaign.desc }  
        </Card.Text>
        {freePlaces > 0 &&
          <NavLink to={`/campaigns/${campaign.name.toLowerCase().replace(' ', '')}-${campaign.id}`} state={{ data: { campaign } }}><Button className='full-width'>Join now!</Button></NavLink>
        }
        {freePlaces <= 0 &&
          <Button className='full-width disabled' aria-disabled="true" tabindex="-1" >Join now!</Button>
        }
      </Card.Body>
    </Card>
  )
}

export default CampaignCard
