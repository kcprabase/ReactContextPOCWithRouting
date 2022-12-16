const weathers = [
    { id: 1, city: "Fairfield", temp: 10, humid: 5, wind: 50 },
    { id: 2, city: "New york", temp: 20, humid: 15, wind: 60 },
    { id: 3, city: "DC", temp: 30, humid: 25, wind: 75 },
    { id: 4, city: "Austin", temp: 40, humid: 35, wind: 84 },
    { id: 5, city: "LA", temp: 50, humid: 45, wind: 110 },
]

const getWeathersData = () => weathers;

const getWeatherDetail = (id) => weathers.find(x => x.id === id);


module.exports = { getWeathersData, getWeatherDetail }