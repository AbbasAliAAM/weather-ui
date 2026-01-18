const WeatherCard = (props) => {
return(
<div className="weather-card">
    <h3>{props.city}</h3>
    <p>Temperature: {props.temperature}°C</p>
    <p>Description: {props.description}</p>
</div>

);
};

export default WeatherCard;
