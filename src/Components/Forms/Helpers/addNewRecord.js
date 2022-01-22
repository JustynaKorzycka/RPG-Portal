import { checkIfExist } from './checkIfExist'
export const addNewRecord = async (value, type, term) => {
  const isNickExist = await checkIfExist(type, term);
  if (isNickExist.length === 0) {
    const res = await fetch(`http://localhost:3000/${type}`, {
      method: "POST",
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(value)    
    })
    return true;
  } else return false;
  
}
  