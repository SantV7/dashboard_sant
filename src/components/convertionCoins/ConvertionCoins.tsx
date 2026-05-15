import { IoMdArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import styles from './convertion-coins.module.scss';
import gsap from "gsap";

interface Rates {
  EUR: number;
  BRL: number;
  JPY: number;
}

const ConvertionCoins = () => {
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const getValues = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setRates(data.rates);
      } catch (erro) {
        console.log('Erro:', erro);
      }
    };
    getValues();
  }, []);

  useEffect(() => {
    if (rates) {
      gsap.fromTo(`.${styles['values-box']}`, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [rates]);

  if (!rates) return null;

  return (
    <div className="data-card" id="convertion-coins">
      <h2 className="cards-tittle">
        Conversão <FaMoneyBillTransfer size={28} style={{ marginLeft: '10px' }} />
      </h2>

      <div className={styles['symbols-table']}>
        <div className={styles['row']}>
          <span className={styles.code}>EUR</span>
          <IoMdArrowRoundForward className={styles.arrow} />
          <span className={styles.symbol}>€</span>
        </div>
        <div className={styles['row']}>
          <span className={styles.code}>USD</span>
          <IoMdArrowRoundForward className={styles.arrow} />
          <span className={styles.symbol}>$</span>
        </div>
        <div className={styles['row']}>
          <span className={styles.code}>BRL</span>
          <IoMdArrowRoundForward className={styles.arrow} />
          <span className={styles.symbol}>R$</span>
        </div>
        <div className={styles['row']}>
          <span className={styles.code}>JPY</span>
          <IoMdArrowRoundForward className={styles.arrow} />
          <span className={styles.symbol}>¥</span>
        </div>
      </div>

      <div className={styles['values-box']}>
        <p>USD = US$ 100,00</p>
        <p>100 USD = € {(rates.EUR * 100).toFixed(2).replace('.', ',')}</p>
        <p>100 USD = R$ {(rates.BRL * 100).toFixed(2).replace('.', ',')}</p>
        <p>100 USD = JP¥ {(rates.JPY * 100).toLocaleString('pt-BR')}</p>
      </div>
    </div>
  );
};

export default ConvertionCoins;