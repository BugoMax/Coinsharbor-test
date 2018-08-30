
import * as actions from './actions';

export const mapStateToProps = (props) => {

    const {food, books, transport, restaurants, displayArr} = props.table;

    return {
        food,
        books,
        transport,
        restaurants,
        displayArr
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onSort: (type) => dispatch(actions.sort(type)),
        onSearchMonth: (month) => dispatch(actions.searchMonth(month))
    };
};
