const returnLastId = async (type) => {
    const res = await fetch(`http://localhost:3000/${type}`);
    const data = await res.json();
    const lastrecord = data.slice(-1);
    return lastrecord[0].id;
}
  
export default returnLastId