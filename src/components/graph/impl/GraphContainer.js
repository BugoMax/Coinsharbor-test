
import * as actions from './actions';

export const mapStateToProps = (props) => {

    const {food, books, transport, restaurants, displayOption, defaultMonth, monthList} = props.graph;

    return {
        food,
        books,
        transport,
        restaurants,
        displayOption,
        defaultMonth,
        monthList
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMonth: (month) => dispatch(actions.changeMonth(month))
    };
};
