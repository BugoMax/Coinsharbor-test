
import filterGraphOptionData from '../impl/filterGraphOptionData';

const arrOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const createStore = (data) => {

    const month = new Date().getMonth();
    let store = {
        food: data.food || [],
        books: data.books || [],
        transport: data.transport || [],
        restaurants: data.restaurants || [],
        monthList: arrOfMonth,
        defaultMonth: arrOfMonth[month]
    };
    store.displayOption = filterGraphOptionData(store);

    return store;
};

export default createStore;
