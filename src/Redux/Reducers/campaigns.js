const campaigns = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAMPAIGNS_SUCCESS':
      return [...action.payload]
    default:
      return state
  }
}
export default campaigns