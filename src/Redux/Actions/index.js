export const campaignsFetching = (campaigns) => ({
  type: 'FETCH_CAMPAIGNS_SUCCESS',
  payload : campaigns
})


export const gameMastersFetching = (gameMasters) => ({
  type: 'FETCH_GAMEMASTERS_SUCCESS',
  payload : gameMasters
})