import SideBar from "./components/sidebar/SideBar"
import '../src/styles/global.css'
import './styles/main.css'
import ConvertionCoins from "./components/convertionCoins/ConvertionCoins"
import Weather from "./components/weather/Weather"
import HourCapital from "./components/hourCapital/HourCapital"
import gsap from "gsap"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    gsap.fromTo('.data-card' , {
      opacity: 0.3,
      scale: 0.91,
      x: -100
    }, {
      ease: 'power2',
      duration: 0.5,
      scale: 1,
      opacity: 1,
      x: 0
    })
  },[])



  return (
    <>

    <div className="all-grid">
      <SideBar />

      <main id="main-content">
        <ConvertionCoins />

        <div className="data-card" id="weather">
          <Weather />
        </div>

        <div className="data-card" id="hour-capital">
          <HourCapital />
        </div>

      </main>
    </div>
    </>
  )
}

export default App
