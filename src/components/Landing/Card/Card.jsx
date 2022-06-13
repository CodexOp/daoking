import React from "react";
import styles from "./Card.module.css";

const Card = ({ header, body, style }) => {
  return (
    <div className={styles.Card} style={style}>
      <div className={styles.CardHeader}>{header}</div>
      <div className={styles.CardBody}>{body}</div>
    </div>
  );
};

export default Card;
