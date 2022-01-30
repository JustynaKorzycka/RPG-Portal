import { checkIfExist } from './checkIfExist'
export const addNewRecord = async (value, type, term) => {
  const nickData = await checkIfExist(type, term);
  if (nickData.length === 0) {
      value.userType === 'player' ? value ={...value, userSaved: {
        "confirmedCamaigns": [] }} :  value ={...value, userSaved: {
      "createdCampaigns": []
    }
    }
      await fetch(`http://localhost:3000/${type}`, {
      method: "POST",
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(value)    
    })
    return true;
  } else return false;
  
}
  