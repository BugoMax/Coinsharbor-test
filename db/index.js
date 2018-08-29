
const food = [
    "bread", "Buttered popcorn", "Masala dosa", "Potato chips",
    "Seafood paella", "Som tam", "Chicken rice", "Poutine", "Tacos",
    "Buttered toast", "Stinky tofu", "Marzipan", "French toast"
];
const books = [
    "Blackberry Winter: My Earlier Years", "My First Hundred Years with Ammu",
    "Autobiography", "Period Piece", "A Memoir: Swimming Across",
    "Fatherhood", "Bootleg", "Jen-X: My Open Book", "Rock This"
];
const transport = ["car", "taxi", "bus"];
const restaurants = ["Whisky Corner", "BAO Modern Chinese Cuisine", "Black Market Restaurant"];
const monthsArr = [null, "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const createItem = (index, title, maxAmount) => ({
    id: (+new Date()) - index,
    title: title,
    amount: getRandomNumber(maxAmount),
    currency: "USD",
    date: {
        year: 2018,
        month: monthsArr[getRandomNumber(12)],
        day: getRandomNumber(31),
        hour: getRandomNumber(24)
    }
});

module.exports = () => {

    const obj = {
        data: {
            food: [],
            transport: [],
            books: [],
            restaurants: []
        }
    };

    for (let i = 0; i < 41; i++) {
        obj.data.food.push(createItem(i, food[getRandomNumber(food.length - 1)], 200));
        obj.data.transport.push(createItem(i, transport[getRandomNumber(transport.length - 1)], 100));
        obj.data.books.push(createItem(i, books[getRandomNumber(books.length - 1)], 200));
        obj.data.restaurants.push(createItem(i, restaurants[getRandomNumber(books.length - 1)], 500));
    }

    return obj;
};
