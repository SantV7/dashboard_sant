import { useEffect, useState } from 'react'
import '../hourCapital/hour-capital.css'
import { PiMoonStarsBold } from "react-icons/pi";
import { MdSunnySnowing } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const HourCapital = () => {

    const [hourBrasilia, setHourBrasilia] = useState((new Date().getUTCHours() - 3 + 24) % 24)
    const [hourTokyo, setHourTokyo] = useState((new Date().getUTCHours() + 9 + 24) % 24)
    const [hourWashington, setHourWashington] = useState((new Date().getUTCHours() - 5 + 24) % 24)
    const [hourBrussels, setHourBrussels] = useState((new Date().getUTCHours() + 1 + 24) % 24)

    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())      
    

    useEffect(() => {
        const intervalHour = setInterval(() => {
            const nowGetTime = new Date()

            setHourBrasilia((nowGetTime.getUTCHours() - 3 + 24) % 24 )
            setHourTokyo((nowGetTime.getUTCHours() + 9 + 24) % 24) 
            setHourWashington((nowGetTime.getUTCHours() - 5 + 24) % 24)
            setHourBrussels((nowGetTime.getUTCHours() + 1 + 24) % 24)

            setMinutes(nowGetTime.getMinutes())
            setSeconds(nowGetTime.getSeconds())
        }, 1000)

        

        return () => clearInterval(intervalHour)
    },[])
    
        const getPeriod = (hour) => {
            if(hour >= 6 && hour < 12) {
                return <MdSunnySnowing size={24.65} color='yellow' />
            } else if(hour >= 12 && hour < 18) {
                return <MdSunnySnowing size={24.65}  color='yellow'/>
            } else if(hour >= 18 && hour < 23) {
                return <PiMoonStarsBold size={26} color='rgb(201, 217, 255)'/>
            } else {
                return <PiMoonStarsBold size={26} color='rgb(201, 217, 255)'/>
            }
        }


  return (
    <>
    <h3 id='tittle-hour' className="cards-tittle">Hora da capital <CiTimer size={34} /></h3>
    <div className='hour-capital-area'>
        <div id='capital-name'>
            <div className='name'>Tokyo <div>-</div> <div>{getPeriod(hourTokyo)}</div></div>
            <div className='name'>Brasília <div>-</div> <div>{getPeriod(hourBrasilia)}</div></div>
            <div className='name'>Washington <div>-</div> <div>{getPeriod(hourWashington)}</div></div>
            <div className='name'>Brussels <div>-</div> <div>{getPeriod(hourBrussels)}</div></div>
        </div>

        <div id='hour-capital'>
            <div className='time-to-capital'>
                {
                 `${hourTokyo.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}                
            </div>

            <div className='time-to-capital'>
                {
                 `${hourBrasilia.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}
            </div>

            <div className='time-to-capital'>
                {
                 `${hourWashington.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}               
            </div>

            <div className='time-to-capital'>
                {
                 `${hourBrussels.toString().padStart('2', 0)}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart('2', 0)}h
               `}               
            </div>
        </div>
    </div>
    </>
  )
}

export default HourCapital