import { MdHistory } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { SiConvertio } from "react-icons/si";
import { PiCurrencyJpyBold } from "react-icons/pi";
import { PiCurrencyDollarSimpleDuotone } from "react-icons/pi";
import { FaBrazilianRealSign } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdEuro } from "react-icons/md";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { GiBrazilFlag } from "react-icons/gi";
import './/../sidebar/sidebar.css'
import { useEffect } from "react";
import gsap from "gsap";


const SideBar = () => {

    useEffect(() => {
        gsap.fromTo('#sidebar-sect-icons', {
            opacity: 0.35,
            y: 100
        }, {
            duration: 1.4,
            ease: 'power3',
            opacity:1,
            y: 0
        })

        gsap.fromTo('.li-animation', {
            x:100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.3,
            ease: 'power2'
        })

        gsap.fromTo('.icon-hover', {
            y:60
        }, {
            y:0,
            ease: 'sine',
            duration: 0.6
        })
    }, [])


    const mes = 1 + new Date().getMonth()

    const dayToday =  new Date().getDate() + '/' +  mes.toString().padStart('2', 0) + '/' + new Date().getFullYear()

    
  return (
      <>
       <nav id="sidebar">
        <ul id="ul-desktop">
          <li className="li-animation"><a href="#">Dashboard <FaHouse className="icon-hover" size={23}/> </a></li>
          <li className="li-animation"><a href="#">Conversão<SiConvertio className="icon-hover" size={23} /></a></li>
          <li className="li-animation"><a href="#">Clima<TiWeatherWindyCloudy className="icon-hover" size={30}/></a></li>
          <li className="li-animation"><a href="#">Histórico<MdHistory className="icon-hover" color="rgb(183, 183, 252)" size={30} /></a></li>
        </ul>

        <section id="sidebar-sect-icons">
            <header>
                <p>Dia:</p>
                <div>{dayToday}</div>
            </header>

            <div className="display-icons">
                <div className="icons-coins">
                    <FaBrazilianRealSign size={27} color="white" />
                    <PiCurrencyJpyBold size={27} color="white" />
                    <MdEuro size={27} color="white" />
                    <PiCurrencyDollarSimpleDuotone size={27} color="white" />
                </div>
                <div className="icons-flags">
                    <GiBrazilFlag size={46} color="green" />
                    <LiaFlagUsaSolid size={46} color="rgb(178, 171, 243)" />
                </div>
            </div>
        </section>
      </nav>
      </>
  )
}

export default SideBar