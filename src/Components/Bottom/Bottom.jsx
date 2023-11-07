import styles from "./Bottom.module.scss";
import { Button } from "../Button/Button";
import btc_sign from "../../assets/icon-1.png";
import { useRef } from "react";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export default function Bottom() {
  const inputRef = useRef(null);
  const inputSelect = () => {
    if (
      inputRef.current &&
      inputRef.current.selectionStart !== inputRef.current.selectionEnd
    ) {
      inputRef.current.classList.add(styles.outlineClass);
    } else {
      inputRef.current.classList.remove(styles.outlineClass);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper_block}>
          <div className={styles.logo_block}>
            <div className={styles.sublogo_block}>
              <img src={btc_sign} alt="LOGO" className={styles.logo} />
              <p className={styles.textlogo}>CryptoCoin</p>
            </div>
            <p className={styles.podtext}>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
              ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
              et sit.
            </p>
          </div>
          <div className={styles.news_block}>
            <h1 className={styles.news_heading}>Newsletter</h1>
            <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
            <div ref={inputRef} className={styles.inputblock}>
              <input
                onMouseUp={inputSelect}
                type="Your email"
                className={styles.input_news}
              />
              <button type="button" className={styles.buttonclass}>
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className={styles.ulblock}>
          <div>
            <h1 className={styles.ulheading}>Get In Touch</h1>
            <ul>
              <li> 123 Street, New York, USA</li>
              <li> +012 345 67890</li>
              <li> info@example.com</li>
            </ul>
          </div>

          <div>
            <h1 className={styles.ulheading}>Our Services</h1>
            <ul className={styles.liblock}>
              <li className={styles.list_item}> Currency Wallet</li>
              <li className={styles.list_item}> Currency Transaction</li>
              <li className={styles.list_item}> Bitcoin Investment</li>
              <li className={styles.list_item}> Token Sale</li>
            </ul>
          </div>
          <div>
            <h1 className={styles.ulheading}>Quick Links</h1>
            <ul>
              <li className={styles.list_item}> About Us</li>
              <li className={styles.list_item}> Contact Us</li>
              <li className={styles.list_item}> Our Services</li>
              <li className={styles.list_item}> Terms & Conditions</li>
            </ul>
          </div>

          <div className={styles.followdiv}>
            <h1 className={styles.ulheading}>Follow Us</h1>
            <div className={styles.followdiv_pics}>
              <AiFillTwitterCircle size={30} />
              <AiFillFacebook size={30} />
              <AiFillLinkedin size={30} />
              <AiFillYoutube size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
