import WeatherCard from "../components/WeatherCards";
import { use, useEffect,useState } from "react";
const Home = () => {
    let url = "";
    const [count,setcount] = useState(0);
    const [city,setcity] = useState("Mumbai");
    const[temp,settemp]= useState(30);
    
    const[weather,setWeather]= useState(null);
    const[loading,setLoading]= useState(false);
    const[error,setError]= useState(null);
     
    // useEffect(() => {
    //     fetchWeather()
    // }, []);

const fetchWeather = async() => {
    try{
    setLoading(true);
    const response = await fetch(`/api/aam/weather?city=${city}`);
    if(!response.ok){
        throw new Error ("Failed to fetch weather data");
    }
    const data = await response.json();
    setWeather(data);
    settemp(data?.temp);
    setLoading(false);
    } catch (err){
        setError(err.message);
        setLoading(false);
    }
};

    const increaseTemperature = () =>{
        settemp(temp + 1);
    };
    return(

        <div>
            {/* <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increase</button>
            </div> */}
            <h2>Weather DashBoard</h2>
                <input 
                type="text"
                value={city}
                onChange ={(e)=> setcity(e.target.value)}
                />
            <button onClick={fetchWeather}>
                Search
            </button>
            {loading && <p style={{ color: "green", fontWeight: "bold" }}>Loading weather data...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {weather && <WeatherCard city = {weather?.city} temperature = {temp} description = {weather?.desc} />}

            {/* <WeatherCard city={city} temperature = {temp} /> */}
            {/* {temp > 35 && <p>Hot weather 🔥</p>} */}
            <p style={{ color: "yellow", fontWeight: "bold" }}>{temp > 35 ? "Very Hot 🔥🔥" : temp > 30 ? "Hot 🔥" : temp < 25 ? "Cold ❄️" : "Normal"}</p>
            <button onClick={increaseTemperature}>
                Increase Temperature
            </button>


            <button onClick={() => settemp(temp - 1)}>
                Decrease Temperature
            </button>
                <br></br>
            
            {/* <WeatherCard city="Delhi" temperature = {41} /> */}
        </div>
    );
};


export default Home;
