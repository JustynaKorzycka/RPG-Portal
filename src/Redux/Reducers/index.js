import { combineReducers } from 'redux';
import campaigns from './campaigns';
import gameMasters from './gameMasters';


const allReducers = combineReducers({
  campaigns,
  gameMasters
})

export default allReducers;