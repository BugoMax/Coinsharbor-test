
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

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const createItem = (index, title, maxAmount) => ({
    id: (+new Date()) - index,
    title: title,
    amount: getRandomNumber(maxAmount),
    currency: "USD",
    date: {
        year: 2018,
        month: getRandomNumber(12),
        day: getRandomNumber(31)
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

    for (let i = 0; i < food.length; i++) {
        obj.data.food.push(createItem(i, food[i], 200));
    }

    for (let i = 0; i < 21; i++) {
        obj.data.transport.push(createItem(i, transport[getRandomNumber(3)], 100));
    }

    for (let i = 0; i < books.length; i++) {
        obj.data.books.push(createItem(i, books[i], 200));
    }

    for (let i = 0; i < restaurants.length; i++) {
        obj.data.restaurants.push(createItem(i, restaurants[i], 500));
    }

    return obj;
};
