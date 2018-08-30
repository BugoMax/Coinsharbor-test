
/* eslint no-case-declarations: 0 */

import { SORT, SEARCH_MONTH } from '../info/constants';
import createStore from '../info/createStore';
import filterData from './filterData';

const arrOfShortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const arrOfFullMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const tableReducer = (initialParams) => {

    const initialState = createStore(initialParams);

    return (state = initialState, action) => {

        switch (action.type) {
            case SORT:

                let displaySortedArr = [...state.displayArr];

                displaySortedArr.sort((a, b) => {
                    if (action.sortType === 'increase') {
                        return b.category.localeCompare(a.category);
                    } else {
                        return a.category.localeCompare(b.category);
                    }
                });

                return Object.assign({}, state, { displayArr: displaySortedArr });
            case SEARCH_MONTH:

                let value = action.month.toLowerCase();

                if (arrOfFullMonth.indexOf(value) !== -1) {
                    value = arrOfShortMonth[arrOfFullMonth.indexOf(value)];
                }

                let displayArrWithSearch = filterData(state);
                const searchReg = new RegExp(value.toLowerCase(), 'gi');

                displayArrWithSearch = displayArrWithSearch.filter((item) => item.date.month.toLowerCase().match(searchReg));

                return Object.assign({}, state, { displayArr: displayArrWithSearch });
            default:
                return state;
        }
    };
};

export default tableReducer;
