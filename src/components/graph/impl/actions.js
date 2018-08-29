
import * as constants from '../info/constants';

export const changeMonth = (month) => {
    return {
        type: constants.CHANGE_MONTH,
        month
    };
};
