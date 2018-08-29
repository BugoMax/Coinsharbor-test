
/* eslint no-case-declarations: 0 */

import { CHANGE_MONTH } from '../info/constants';
import createStore from '../info/createStore';
import filterGraphOptionData from './filterGraphOptionData';

const graphReducer = (initialParams) => {

    const initialState = createStore(initialParams);

    return (state = initialState, action) => {

        switch (action.type) {
            case CHANGE_MONTH:

                const displayOption = filterGraphOptionData(state, action.month);

                return Object.assign({}, state, { displayOption });
            default:
                return state;
        }
    };
};

export default graphReducer;
