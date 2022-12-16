import { Link } from "react-router-dom";

export default function Weather(props) {
    return (
        <>
            <p>City:<Link to={'/weather-detail/' + props.id}>{props.city}</Link> </p>
            <p>Temperature: {props.temp}</p>
            <hr />
        </>
    );
}