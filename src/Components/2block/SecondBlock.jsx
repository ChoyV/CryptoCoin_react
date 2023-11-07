import { Button } from "../Button/Button";
import styles from "./SecondBlock.module.scss";
import picture1block from "../../assets/about.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SecondBlock() {
  const picVariant = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const control = useAnimation();
  const control2 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.15,
  });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.15 }); // Trigger animation only once

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    if (inView2) {
      control.start("visible");
    }
  }, [control, inView, control2, inView2]);

  return (
    <>
      <div className={styles.container}>
        <motion.div
          ref={ref2}
          className={styles.textside}
          variants={picVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={styles.heading}>About Us</p>
          <p className={styles.subheading}>
            The Most Trusted Cryptocurrency Platform
          </p>
          <p className={styles.plaintext}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet{" "}
          </p>
          <p className={styles.plaintext}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <ul className={styles.list1}>
            <li className={styles.listitem}>
              <AiOutlineCheckCircle
                size={30}
                color="cyan"
                className="padding 0 4"
              />
              Tempor erat elitr rebum at clita
            </li>
            <li className={styles.listitem}>
              <AiOutlineCheckCircle size={30} color="cyan" />
              Tempor erat elitr rebum at clita
            </li>
            <li className={styles.listitem}>
              <AiOutlineCheckCircle size={30} color="cyan" />
              Tempor erat elitr rebum at clita
            </li>
          </ul>
          <Button text="Read More" />
        </motion.div>
        <motion.div
          ref={ref}
          className={styles.picture}
          variants={picVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6 }}
        >
          <img src={picture1block} alt="pictute" />
        </motion.div>
      </div>
    </>
  );
}
