import styles from "./SeventhBlock.module.scss";
import { Button } from "../Button/Button";
import one from "../../assets/payment-1.png";
import two from "../../assets/payment-2.png";
import three from "../../assets/payment-3.png";
import four from "../../assets/payment-4.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SeventhBlock() {
  const picVariant = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const control = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const timerData = [
    { label: "Days", number: "0" },
    { label: "Hours", number: "0" },
    { label: "Minutes", number: "0" },
    { label: "Seconds", number: "0" },
  ];

  return (
    <>
      <div ref={ref} className={styles.main_container}>
        <motion.div
          className={styles.textblock}
          variants={picVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.heading}>Token Sale</p>
          <p className={styles.subtext}>Token Sale Countdown</p>
        </motion.div>
        <div className={styles.timerblock}>
          {timerData.map((data, index) => (
            <motion.div
              key={data.label}
              className={styles.timer_subframe}
              variants={picVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }} // Add a delay between timer_subframes
            >
              <p className={styles.number}>{data.number}</p>
              <p className={styles.timerblock_text}>{data.label}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.button_container}>
          <Button text="Buy Tokens" />
        </div>
        <div className={styles.imgblock}>
          <img src={one} alt="" className={styles.image} />
          <img src={two} alt="" className={styles.image} />
          <img src={three} alt="" className={styles.image} />
          <img src={four} alt="" className={styles.image} />
        </div>
      </div>
    </>
  );
}
