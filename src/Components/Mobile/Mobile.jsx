
import styles from "./Mobile.module.scss";

export default function Header() {

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.maintext}>Sorry, use PC instead </h1>
        <p className={styles.subtext}>Mobile version in progress...</p>
      </div>
    </>
  );
}
