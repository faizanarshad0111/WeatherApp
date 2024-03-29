import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    let [info, setInfo] = useState( {
        cityName: "WonderLand",
        date: new Date().toDateString(),
        temp: 25,
        mintemp: 20,
        maxtemp: 29,
        humidity: 20,
        weather: "haze",
        visibility: 2,
        wind: 5,
      });

      let updateInfo = (newInfo)=>{
       setInfo(newInfo)
      }

    return (

<>

< SearchBox updateInfo={updateInfo} />
< InfoBox  info={info}  />


</>

    )
}

export default WeatherApp