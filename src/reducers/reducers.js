
import { combineReducers } from 'redux';

const test = (state = {}, action) => {
    return state;
};

const test2 = (state = {}, action) => {
    return state;
};

const reducers = () => {

    return combineReducers({
        test: test,
        test2: test2
    });
};

export default reducers;
