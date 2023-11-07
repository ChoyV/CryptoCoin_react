import styles from "./Button.module.scss";
import React from "react";

export function Button(props) {
  return (
    <>
      <button onClick={props.action} className={styles.buttoner}>
        {props.text}
      </button>
    </>
  );
}
