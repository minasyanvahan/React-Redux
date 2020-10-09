import { combineReducers } from "redux";
import CountStateReducer from '../reducer/CountState';

const rootReducer = combineReducers({
    numbers: CountStateReducer
});

export default rootReducer;