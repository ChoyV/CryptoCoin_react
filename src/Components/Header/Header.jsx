import btc_sign from "../../assets/icon-1.png";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./Header.module.scss";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  const content = useRef(null);
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (content.current) {
        if (window.scrollY > 300) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {};
  }, []);

  return (
    <>
      <div
        ref={content}
        className={
          isSticky
            ? `${styles.headerOutofview} ${styles.slidetop}`
            : styles.headerInview
        }
      >
        <div className={styles.logoBox}>
          <img src={btc_sign} alt="Logo" className={styles.btclogo} />
          <p className={styles.textlogo}>CryptoCoin</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.bullets}>Home</li>
          <li className={styles.bullets}>About</li>
          <li className={styles.bullets}>Service</li>
          <li className={styles.bullets}>Roadmap</li>
          <li className={styles.bullets}>Pages</li>
          <li className={styles.bullets}>Contact</li>
        </ul>
        <div className={styles.socials}>
          <AiFillTwitterCircle size={30} className={styles.socialogo} />
          <AiFillFacebook size={30} className={styles.socialogo} />
          <AiFillLinkedin size={30} className={styles.socialogo} />
        </div>
      </div>
    </>
  );
}
