import styles from "./ThirdBlock.module.scss";
import firstpic from "../../assets/icon-9.png";
import secondpic from "../../assets/icon-10.png";
import thirdpic from "../../assets/icon-2.png";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ThirdBloch() {
  const [TXtoday, setToday] = useState(0);
  const [TXmonth, setMonth] = useState(0);
  const [TXtotal, setTotal] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 1 });

  const formatCounter = (value) => {
    // Format the value with leading zeros and fixed width
    return value.toString().padStart(6, "0");
  };

  const startTimer = () => {
    let todayCount = 123200;
    let monthCount = 123200;
    let totalCount = 123200;

    const interval = setInterval(() => {
      todayCount += 1;
      monthCount += 1;
      totalCount += 1;

      setToday(formatCounter(todayCount));
      setMonth(formatCounter(monthCount));
      setTotal(formatCounter(totalCount));

      if (todayCount >= 123456) {
        clearInterval(interval); // Stop the timer when you reach the desired count
      }
    }, 17); // Update the counters every 100ms
  };

  useEffect(() => {
    if (inView) {
      startTimer();
    }
  }, [inView]);

  return (
    <>
      <div className={styles.container}>
        <div ref={ref} className={styles.one}>
          <img src={firstpic} alt="" />
          <p className={styles.counter}>{TXtoday}</p>
          <p className={styles.textcyan}>Today Transactions</p>
        </div>
        <div className={styles.two}>
          <img src={secondpic} alt="" className={styles.pic} />
          <p className={styles.counter}>{TXmonth}</p>
          <p className={styles.textcyan}>Monthly Transactions</p>
        </div>
        <div className={styles.three}>
          <img src={thirdpic} alt="" />
          <p className={styles.counter}>{TXtotal}</p>
          <p className={styles.textcyan}>Total Transactions</p>
        </div>
      </div>
    </>
  );
}
