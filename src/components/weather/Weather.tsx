import { useEffect, useState } from 'react'
import '../weather/weather.css'
import gsap from 'gsap';
import { TiWeatherCloudy } from "react-icons/ti"; //ICON Rain



const Weather = () => {
  const capitalNames = {
    tokyo: 'Tokyo',
    brasilia: 'Brasilia',
    washington: 'Washington',
    brussels: 'Brussels'
  }

  
    const [tempTokyo, setTempTokyo] = useState('')
    const [tempBrasilia, setTempBrasilia] = useState('')
    const [tempBrussels, setTempBrussels] = useState('')
    const [tempWashington, setTempWashington] = useState('')
 

  useEffect(() => {
   
    const returnCapitalTemp = (capitalData, setTemp ) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capitalData}&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric`)
      .then(response => response.json())
      .then(temp => {
         setTemp(temp.main.temp)
      })
      .catch(error => console.error('Error', error))
    }  

     returnCapitalTemp(capitalNames.tokyo, setTempTokyo)
     returnCapitalTemp(capitalNames.brasilia, setTempBrasilia)
     returnCapitalTemp(capitalNames.washington, setTempWashington)
     returnCapitalTemp(capitalNames.brussels,setTempBrussels)


     const setIntervalFuntion = setInterval(() => {
        returnCapitalTemp(capitalNames.tokyo, setTempTokyo)
        returnCapitalTemp(capitalNames.brasilia, setTempBrasilia)
        returnCapitalTemp(capitalNames.washington, setTempWashington)
        returnCapitalTemp(capitalNames.brussels,setTempBrussels)
     }, 60000)
      
     
     gsap.fromTo('.climate-temperature', {
      opacity: 0,
      y: 100
    }, {
      duration: 2.3,
      ease: 'power3',
      opacity:1,
      y: 0
    })
    
    return () => clearInterval(setIntervalFuntion)
  }, [])




  return (
    <>
    <h2 id='weather-h2' className="cards-tittle">Clima <TiWeatherCloudy size={42}/></h2>

    <div className="weather-location">
        <div className='climate-capital-name' id="jp-capital">Tokyo - JP  <div className="climate-temperature">{tempTokyo}°C</div></div>
        <div className='climate-capital-name' id="brasil-capital">Brasília - BR  <div className="climate-temperature">{tempBrasilia}°C</div></div>
        <div className='climate-capital-name' id="washington-capital">Washington - US  <div className="climate-temperature">{tempWashington}°C</div></div>
        <div className='climate-capital-name' id="brussels-capital">Brussels - BE  <div className="climate-temperature">{tempBrussels}°C</div></div>
    </div>
    </>
  )
}

export default Weather

