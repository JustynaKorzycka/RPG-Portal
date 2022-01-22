import returnLastId from "./findLastId";

const addNewRecord = async (value, type) => {
    value.id = await returnLastId(type)+1;
    const res = await fetch(`http://localhost:3000/${type}`, {
      method: "POST",
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(value)
    })
}
  
export default addNewRecord;