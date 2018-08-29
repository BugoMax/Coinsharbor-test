
import { combineReducers } from 'redux';

import graphReducer from '../components/graph/impl/reducer';

const test = (state = {}, action) => {
    return state;
};

export const configurateReducers = (store) => {

    return combineReducers({
        graph: graphReducer(store),
        test: test
    });
};

export default configurateReducers;
