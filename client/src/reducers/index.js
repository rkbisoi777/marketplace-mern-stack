import { combineReducers } from 'redux';
import {authReducer} from "./auth"

// 3. create multiple reducers
const rootReducer = combineReducers({
    user: authReducer,
});
  
export default rootReducer;