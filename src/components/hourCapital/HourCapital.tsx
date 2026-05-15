import { useEffect, useState } from 'react';
import styles from './hour-capital.module.scss';
import { PiMoonStarsBold } from "react-icons/pi";
import { MdSunnySnowing } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const CAPITALS = [
  { name: 'Tokyo', zone: 'Asia/Tokyo' },
  { name: 'Brasília', zone: 'America/Sao_Paulo' },
  { name: 'Washington', zone: 'America/New_York' },
  { name: 'Brussels', zone: 'Europe/Brussels' },
];

const HourCapital = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeInfo = (zone: string) => {
    const timeString: string = now.toLocaleTimeString('pt-BR', { 
        timeZone: zone, 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const hour: number = parseInt(timeString.split(':')[0]);
    
    const icon = (hour >= 6 && hour < 18) 
      ? <MdSunnySnowing size={24.65} color='yellow' />
      : <PiMoonStarsBold size={26} color='rgb(201, 217, 255)'/>;

    return { timeString, icon };
  };

  return (
    <>
      <h3 id={styles['tittle-hour']} className={styles['cards-tittle']}>
        Hora da capital <CiTimer size={34} />
      </h3>
      
      <div className={styles['hour-capital-area']}>
        <div id={styles['capital-name']}>
          {CAPITALS.map(cap => {
            const { icon } = getTimeInfo(cap.zone);
            return (
              <div key={cap.name} className={styles.name}>
                {cap.name} <div>-</div> <div>{icon}</div>
              </div>
            );
          })}
        </div>

        <div id={styles['hour-capital']}>
          {CAPITALS.map(cap => {
            const { timeString } = getTimeInfo(cap.zone);
            return (
              <div key={cap.name} className={styles['time-to-capital']}>
                {timeString}h
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HourCapital;