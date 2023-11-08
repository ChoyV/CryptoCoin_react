import styles from "./SixthBlock.module.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function SixthBlock() {
  const sliderRef = useRef(null);
  const carouselItems = [
    <div key="item1" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>January 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item2" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>February 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>March 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>April 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>May 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>June 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>July 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>August 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>September 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>November 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
    <div key="item3" className={styles.carouselItem}>
      <div className={styles.bgline}></div>
      <div className={styles.vertical_line}></div>
      <div className={styles.smaller_romb}></div>
      <div className={styles.slider_smallromb_outline}></div>
      <p className={styles.carousel_title}>December 2024</p>
      <p className={styles.carousel_subtitle}>Lorem ipsum dolor sit amet.</p>
    </div>,
  ];

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <BsArrowLeftCircleFill />,
    prevArrow: <BsArrowRightCircleFill />,
  };

  return (
    <>
      <div className={styles.main_container}>
        <p className={styles.maintitle}>Roadmap</p>
        <p className={styles.subtitle}>We Translate Your Dream Into Reality</p>
        <div className={styles.container}>
          <Slider ref={sliderRef} {...settings}>
            {carouselItems}
          </Slider>

          <div className={styles.buttons_slide}>
            <BsArrowLeftCircleFill
              onClick={goToPreviousSlide}
              className={styles.icontip}
              size={40}
              color="#22d3ee"
            />
            <BsArrowRightCircleFill
              onClick={goToNextSlide}
              className={styles.icontip}
              size={40}
              color="#22d3ee"
            />
          </div>
        </div>
      </div>
    </>
  );
}
