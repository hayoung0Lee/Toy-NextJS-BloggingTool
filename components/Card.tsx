import React from "react";
import styles from "./Card.module.css";

interface Props {
  d: number;
}

const CardViewer: React.FC<Props> = ({ d }) => {
  return <div className={styles.card}>{d}</div>;
};

export default CardViewer;
