import { Button } from "../Button/Button";
import styles from "./FirstBlock.module.scss";
import picture1block from "../../assets/hero-1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FirstBlock() {
  const pulseAnimation = {
    scale: [1, 1.1, 1], // Scale up, then back to normal
    transition: {
      duration: 5,
      repeat: Infinity, // Repeat the animation infinitely
      ease: "easeInOut",
    },
  };

  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.textside}
          animate={{ y: 0 }}
          initial={{ y: -150 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.heading}>
            Make Better Life With <br />
            Trusted CryptoCoin
          </p>
          <p className={styles.describ}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam <br /> amet diam et eos. Clita erat ipsum et lorem et sit, sed
            stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <Button text="Explore More" />
        </motion.div>
        <motion.div
          className={styles.picture}
          initial={{ scale: 1.0 }}
          animate={pulseAnimation}
        >
          <img src={picture1block} alt="pictute" />
        </motion.div>
      </div>
    </>
  );
}
