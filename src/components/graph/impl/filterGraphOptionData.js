
const filterGraphOptionData = (store, month) => {

    const currentMonth = month || store.defaultMonth;
    let days = [];

    const handleAddDaysAndGetAmount = (item) => {

        if (days.indexOf(item.date.day) === -1) {
            days.push(item.date.day);
        }
        return item.amount;
    };
    const handleFilterOption = (data) => {

        return data
            .filter((item) => item.date.month === currentMonth)
            .map((item) => handleAddDaysAndGetAmount(item))
            .sort((a, b) => a - b);
    };

    const food = handleFilterOption(store.food);
    const books = handleFilterOption(store.books);
    const transport = handleFilterOption(store.transport);
    const restaurants = handleFilterOption(store.restaurants);

    days = days.sort((a, b) => a - b).map((item) => `${item} ${currentMonth}`);

    return {
        food,
        books,
        transport,
        restaurants,
        selectedMonth: currentMonth,
        days
    };
};

export default filterGraphOptionData;
