import React, { useState } from 'react'
import Search from './Search'
import axios from 'axios'

function WeatherMain() {



    const [search,setSearch]=useState("")
    const [weatherData,setWeatherData]=useState("")

    const handleClick=()=>{

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1fb774e6b1488381870692c38c4c67a5`)
        .then((res)=>{
           setWeatherData(res.data)
           console.log(weatherData)
        })
        .catch((e)=>{
            console.log(e.error)
        })
    }


  return (
    <div>
        <Search  search={search} setSearch={setSearch} handleClick={handleClick}    />
   <h1>{weatherData?.name}</h1>
   <h1>{weatherData?.main?.temp}</h1>
   <h1>{weatherData?.wind?.speed}</h1>
        </div>
  )
}

export default WeatherMain