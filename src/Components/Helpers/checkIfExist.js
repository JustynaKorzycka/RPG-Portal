export const checkIfExist = async(type, value ) => {
  const res = await fetch(`http://localhost:3000/${type}?nick=${value}`);
  const data = await res.json();
  return data;
}