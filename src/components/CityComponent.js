import styled from "styled-components";

const WeatherLogo  = styled.img`
 width: 140px;
 height: 140px;
 margin : 40px auto ;
`
const ChooseCityLabel = styled.span`
color : black ; 
font-size: 18px;
font-weight: bolder;
margin : 10px auto ; 
`
const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: solid black 1px;
    border-radius: 2px;
    color : black ; 
  
    margin : 10px auto ; 

    & input{
            padding : 10px ; 
            font-size: 14px;
            border : none ; 
            outline: none;
            font-weight: bolder;
    }
    & button {
            padding : 10px ; 
            font-size: 14px;
            border : none ; 
            outline: none;
            font-weight: bolder;   
            cursor: pointer;
            color :deeppink  ;
            background-color: black;
    }

`
const CityComponent = (props) =>{

    const {updateCity , fetchWeather} = props   ;

    return (
        <>
        <WeatherLogo src="/icon/perfect-day.svg" />
        <ChooseCityLabel>Find Weather of your city !!</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
        <input placeholder="search your city..." 
        onChange={(e) => updateCity(e.target.value)}/>
        <button type="submit">Search</button>
        </SearchBox>
        </>


    ) ;
} ; 

export default CityComponent ; 
