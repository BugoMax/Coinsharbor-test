
const filterData = (store) => {

    let res = [];

    store.food.forEach((item) => { res.push(item); });
    store.books.forEach((item) => { res.push(item); });
    store.transport.forEach((item) => { res.push(item); });
    store.restaurants.forEach((item) => { res.push(item); });

    res.sort((a, b) => a.date.month - b.date.month);

    return res;
};

export default filterData;
