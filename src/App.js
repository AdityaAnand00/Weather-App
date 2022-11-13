
import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";
// const API_KEY = "5f1498d392cd26786f359fcd4216691e" ; 



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;

  margin-left: -20px;
`

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`



function App() {

    const [city , updateCity] = useState() ; 
    const [weather , updateWeather] = useState() ; 

    const fetchWeather = async (e) =>{
      e.preventDefault() ;
      const response =  await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f1498d392cd26786f359fcd4216691e`) ; 
      updateWeather(response.data);
    } ; 

  return (
    <Container >
    <AppLabel>REACT WEATHER APP </AppLabel> 
      { city && weather ? 
          ( <WeatherComponent weather={weather} city ={city}/>
          ):(
            <CityComponent  updateCity = {updateCity} fetchWeather = {fetchWeather}/>
            )
      }
    </Container>
  );
}

export default App;
