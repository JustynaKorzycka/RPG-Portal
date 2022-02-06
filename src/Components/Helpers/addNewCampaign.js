
export const addNewCampaign = async (value, type) => {
  let add
 
  try {
    await fetch(`http://localhost:3000/${type}`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
      body: JSON.stringify(value)
    })
    
    add = true;
  } catch (e) {
    add = false;
  }
  return add
}
  