import styles from './FourthBlock.module.scss';
import one from '../../assets/icon-7.png';
import two from '../../assets/icon-6.png';
import three from '../../assets/icon-5.png';
import four from '../../assets/icon-4.png';
import five from '../../assets/icon-3.png';
import six from '../../assets/icon-8.png';
import {motion, useAnimation} from 'framer-motion' ;
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



export default function FourthBlock () {
    const picVariant = {
        hidden: {y:150, opacity:0},
        visible: {y:0, opacity:1},
    } 

    const control = useAnimation();


    const [ref, inView] = useInView({triggerOnce: true, // Trigger animation only once
    threshold: 0.1,})


    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);


      const smallCellData = [
        {
          imgSrc: one,
          title: 'Easy To Start',
          text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
          imgSrc: two,
          title: 'Safe & Secure',
          text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
          imgSrc: three,
          title: 'Affordable Plans',
          text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
          imgSrc: four,
          title: 'Secure Storage',
          text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
          imgSrc: five,
          title: 'Protected By Insurance',
          text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
          imgSrc: six,
          title: '24/7 Support',
          text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
      ];

    return (
    <>
        <div ref={ref} className={styles.main_container} >
            <motion.div variants={picVariant} initial= "hidden" animate={control} transition= {{duration:0.6, delay:0.3}}>
            <p className={styles.maintitle}>Why Us!</p>
            <p className={styles.subtitle}>The Best In The crypto Industry</p>
            </motion.div>
            <div className={styles.container}>
            {smallCellData.map((data, index) => (
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
                <div className={styles.smallcell_textblock}>
                  <p className={styles.smallcell_title}>{data.title}</p>
                  <p className={styles.smallcell_text}>{data.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
                </div>
        </div>
    </>
    )
} 