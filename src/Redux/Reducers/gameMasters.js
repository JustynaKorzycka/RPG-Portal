const gameMasters = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GAMEMASTERS_SUCCESS':
      return [...action.payload]
    default:
      return state
  }
}
export default gameMasters