import { useEffect, useState, useRef } from 'react';
import styles from './weather.module.scss'; // Importe como 'styles'
import gsap from 'gsap';
import { TiWeatherCloudy } from "react-icons/ti";

const Weather = () => {
  const containerRef = useRef(null);
  const capitalNames = {
    tokyo: 'Tokyo',
    brasilia: 'Brasilia',
    washington: 'Washington',
    brussels: 'Brussels'
  };

  const [tempTokyo, setTempTokyo] = useState<number>(0);
  const [tempBrasilia, setTempBrasilia] = useState<number>(0);
  const [tempBrussels, setTempBrussels] = useState<number>(0);
  const [tempWashington, setTempWashington] = useState<number>(0);

  useEffect(() => {
    const returnCapitalTemp = (capitalData: string, setTemp: React.Dispatch<React.SetStateAction<number>>) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capitalData}&appid=bf9babda0b7e59340e10f1e1dfe80371&units=metric`)
        .then(response => response.json())
        .then(data => {
          if (data.main) setTemp(Math.round(data.main.temp));
        })
        .catch(error => console.error('Error', error));
    };

    const fetchAll = () => {
      returnCapitalTemp(capitalNames.tokyo, setTempTokyo);
      returnCapitalTemp(capitalNames.brasilia, setTempBrasilia);
      returnCapitalTemp(capitalNames.washington, setTempWashington);
      returnCapitalTemp(capitalNames.brussels, setTempBrussels);
    };

    fetchAll();
    const interval = setInterval(fetchAll, 60000);

    // GSAP usando seletor de classe do Module
    gsap.fromTo(`.${styles['climate-temperature']}`, {
      opacity: 0,
      y: 50
    }, {
      duration: 1.5,
      ease: 'power3.out',
      opacity: 1,
      y: 0,
      stagger: 0.2 // Efeito cascata legal
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef}>
      <h2 id={styles['weather-h2']} className={styles['cards-tittle']}>
        Clima <TiWeatherCloudy size={42} />
      </h2>

      <div className={styles['weather-location']}>
        <div className={styles['climate-capital-name']}>
          Tokyo - JP  
          <div className={styles['climate-temperature']}>{tempTokyo}°C</div>
        </div>
        <div className={styles['climate-capital-name']}>
          Brasília - BR  
          <div className={styles['climate-temperature']}>{tempBrasilia}°C</div>
        </div>
        <div className={styles['climate-capital-name']}>
          Washington - US  
          <div className={styles['climate-temperature']}>{tempWashington}°C</div>
        </div>
        <div className={styles['climate-capital-name']}>
          Brussels - BE  
          <div className={styles['climate-temperature']}>{tempBrussels}°C</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;