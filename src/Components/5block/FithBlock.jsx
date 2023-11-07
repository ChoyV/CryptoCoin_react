import styles from "./FithBlock.module.scss";
import one from "../../assets/icon-7.png";
import two from "../../assets/icon-3.png";
import three from "../../assets/icon-9.png";
import four from "../../assets/icon-5.png";
import five from "../../assets/icon-2.png";
import six from "../../assets/icon-8.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FithBlock() {
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

  const serviceData = [
    {
      imgSrc: one,
      title: "Currency Wallet",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
    },
    {
      imgSrc: two,
      title: "Currency Transaction",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
    },
    {
      imgSrc: three,
      title: "Bitcoin Investment",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
    },
    {
      imgSrc: four,
      title: "Currency Exchange",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
    },
    {
      imgSrc: five,
      title: "Bitcoin Escrow",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
    },
    {
      imgSrc: six,
      title: "Token Sale",
      text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo",
    },
  ];

  return (
    <>
      <div ref={ref} className={styles.main_container}>
        <motion.div
          variants={picVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.maintitle}>Services</p>
          <p className={styles.subtitle}>
            Buy, Sell And Exchange Cryptocurrency
          </p>
        </motion.div>
        <div className={styles.container}>
          {serviceData.map((data, index) => (
            <motion.div
              key={index}
              className={styles.smallcell}
              variants={picVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div className={styles.small_container}>
                <img src={data.imgSrc} alt="" className={styles.pic} />
                <p className={styles.smallcell_title}>{data.title}</p>
                <p className={styles.smallcell_text}>{data.text}</p>
                <p className={styles.smallcell_link}>
                  Read More <AiOutlineArrowRight />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
