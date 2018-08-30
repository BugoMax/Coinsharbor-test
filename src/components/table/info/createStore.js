
import filterData from '../impl/filterData';

const createStore = (data) => {

    let store = {
        food: data.food || [],
        books: data.books || [],
        transport: data.transport || [],
        restaurants: data.restaurants || []
    };
    store.displayArr = filterData(store);

    return store;
};

export default createStore;
