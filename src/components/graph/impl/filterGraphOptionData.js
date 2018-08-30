
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

    const food = currentMonth !== 'total'
        ? handleFilterOption(store.food)
        : store.food.map((item) => handleAddDaysAndGetAmount(item));

    const books = currentMonth !== 'total'
        ? handleFilterOption(store.books)
        : store.books.map((item) => handleAddDaysAndGetAmount(item));

    const transport = currentMonth !== 'total'
        ? handleFilterOption(store.transport)
        : store.transport.map((item) => handleAddDaysAndGetAmount(item));

    const restaurants = currentMonth !== 'total'
        ? handleFilterOption(store.restaurants)
        : store.restaurants.map((item) => handleAddDaysAndGetAmount(item));

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
