import { useEffect, useState } from "react";
import { getWeathersData } from "./api/data";
import Weather from "./Weather";

export default function Weathers() {

    const [weathers, setWeathers] = useState([]);

    const getWeathers = () => {
        let response = getWeathersData();
        setWeathers(response);
    }

    useEffect(() => {
        getWeathers();
    }, []);

    return (
        weathers.map(weather => {
            return <Weather key={weather.id} id={weather.id} city={weather.city} temp={weather.temp} />
        })
    );
}