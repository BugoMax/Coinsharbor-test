
import { combineReducers } from 'redux';

import graphReducer from '../components/graph/impl/reducer';
import tableReducer from '../components/table/impl/reducer';

export const configurateReducers = (store) => {

    return combineReducers({
        graph: graphReducer(store),
        table: tableReducer(store)
    });
};

export default configurateReducers;
