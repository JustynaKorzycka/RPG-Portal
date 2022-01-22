import { configureStore } from '@reduxjs/toolkit'; 
import campaignsReducer from './campaignsSlice';
import gameMasterReducer from './gameMastersSlice';
import loginUserReducer from './loginUserSlice'

 const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
     gameMasters: gameMasterReducer,
    user: loginUserReducer
  }
 })

export default store;