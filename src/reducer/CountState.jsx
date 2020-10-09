import { RANDOMINC, RANDOMDEC } from '../rootReducer/counterType';

const COUNT_STATE = {
    num: 0
}

const CountStateReducer = (state = COUNT_STATE, action) => {
    switch(action.type) {
        case RANDOMINC : 
            return {
                ...state, num: state.num +1, 
            }
        case RANDOMDEC :
            return {
                ...state, num: state.num -1,
            }
        default: return state; 
    }
}

export default CountStateReducer;