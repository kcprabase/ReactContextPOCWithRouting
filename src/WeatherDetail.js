import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getWeatherDetail } from "./api/data";
import { ThemeColorContext } from "./Dashboard";

function WeatherDetail() {

    const color = useContext(ThemeColorContext);
    const inpEl = useRef();
    const [detail, setDetail] = useState({});
    const { id } = useParams("id");
    const getDetail = () => {
        let res = getWeatherDetail(parseInt(id));
        setDetail(res);
    }
    useEffect(() => {
        getDetail();
    }, []);

    const changeColor = () => {
        color.changeColor(inpEl.current.value);
    }
    return (
        <>
            <p>Current Theme: {color.color}</p>
            <p><input ref={inpEl} /><button onClick={changeColor}>Change color</button></p>
            <h1>Weather Detail at {detail.city}</h1>
            <p>Temperature: {detail.temp}</p>
            <p>Humidity: {detail.humid}</p>
            <p>Wind: {detail.wind}</p>
        </>
    );
}

export default WeatherDetail;