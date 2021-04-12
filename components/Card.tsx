import React from "react";
import styles from "./Card.module.css";
import { PostType } from "../utils/types";

interface Props {
  d: PostType;
}

const CardViewer: React.FC<Props> = ({ d }) => {
  return <div className={styles.card}>{d.id}</div>;
};

export default CardViewer;
