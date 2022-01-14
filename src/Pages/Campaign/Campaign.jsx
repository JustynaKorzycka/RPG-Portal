import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header';


const Campaign = () => {

  const location = useLocation();
  const { data } = location.state;
  const campaign = data.campaign

  return (
    <div>
      <Header title={campaign.name} image={campaign.image} />
      
    </div>
  )
}

export default Campaign
