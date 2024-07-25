import './Weather.css'
import searchicon from '../Images/search.png'
import clearicon from '../Images/clear.png'
import cloudicon from '../Images/cloud.png'
import drizzleicon from '../Images/drizzle.png'
import humidicon from '../Images/humidity.png'
import rainicon from '../Images/rain.png'
import snowicon from '../Images/snow.png'
import windicon from '../Images/wind.png'
//import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
function Weather(){
    const [weatherdata,setWeatherdata]=useState(false);
    const inref=useRef();
    const allicons={
        "01d":clearicon,
        "01n":clearicon,
        "02d":cloudicon,
        "02n":cloudicon,
        "03d":cloudicon,
        "03n":cloudicon,
        "04d":drizzleicon,
        "04n":drizzleicon,
        "09d":rainicon,
        "09n":rainicon,
        "10d":rainicon,
        "10n":rainicon,
        "13d":snowicon,
        "13n":snowicon
    }
    const search=async (city)=>{
        if(city==="")
        {
            alert("Enter the City name!!")
            return;
        }
        try{
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const res1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            const res=await res1.json();
            //const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
            if(!res1.ok){
                alert(res.message);
                return;
            }
            console.log(res);
            const icon=allicons[res.weather[0].icon]||clearicon;
            setWeatherdata({
                humidity:res.main.humidity,
                windspeed:res.wind.speed,
                temparature:Math.floor(res.main.temp),
                location:res.name,
                icon:icon
            })
        }
        catch(error){
            setWeatherdata(false);
            console.error("Error in fetching the data");
        }
    }
        useEffect(()=>{
            search("London")
        },[])
    return (
        <>
        <div className="weather">
            <h1>WEATHER-APP</h1>
            <div className="search-bar">
                <input ref={inref} type="text" placeholder="Enter City"></input>
                <img src={searchicon} alt="" onClick={()=>search(inref.current.value)} />
            </div>
                {weatherdata?<>
                    <img src={weatherdata.icon} alt='' className='weathor-icon'/>
                <p className='temparature'>{weatherdata.temparature}°c</p>
                <p className='Cityname'>{weatherdata.location}</p>
                <div className='weather-data'>
                    <div className='col'>
                        <img src={humidicon} alt=''/>
                        <div>
                        <p>{weatherdata.humidity}%</p>
                        <span>Humidity</span>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={windicon} alt=''/>
                        <div>
                        <p>{weatherdata.windspeed} Km/hr</p>
                        <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
                </>:<p className='load'>Loading...</p>}
        </div>
        </>
    )
}
export default Weather