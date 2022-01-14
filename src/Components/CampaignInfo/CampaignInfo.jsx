import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import './CampaignInfo.scss'

const CampaignInfo = ({ avatar, nick, freePlaces, playersNumber }) => {
  return (
    <div className="info">
        <div className="master"> 
          <div className="avatar"><img src={ avatar } alt='avatar' /></div>
          <h6>{nick}</h6>
      </div>
      <div className="places">
        <p>Available  places: <span>{ freePlaces }</span></p>
        {freePlaces > 0 ? <AiFillCheckCircle color='green' size={20} /> : <AiFillCloseCircle color='red' size={20}/> }  
      </div>
      {playersNumber && <div className="places">
         <p>Maximum number of players: <span>{ playersNumber }</span></p>
      </div>}
    </div>
  )
}

export default CampaignInfo
