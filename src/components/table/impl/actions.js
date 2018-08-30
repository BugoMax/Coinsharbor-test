
import * as constants from '../info/constants';

export const sort = (sortType) => {
    return {
        type: constants.SORT,
        sortType
    };
};

export const searchMonth = (month) => {
    return {
        type: constants.SEARCH_MONTH,
        month
    };
};
