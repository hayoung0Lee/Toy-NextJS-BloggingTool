import React from "react";
import styles from "./Card.module.css";
import { ArticleType } from "../../utils/types";
import Link from "next/link";

interface Props {
  d: ArticleType;
}

const CardViewer: React.FC<Props> = ({ d }) => {
  return (
    <Link href={`/${d.author}/${d.articleId}`}>
      <div className={styles.card}>
        <h2>{d.title}</h2>
        <p className={styles.contents}>{d.contents}</p>
        <p className={styles.cardBottom}>by {d.author}</p>
      </div>
    </Link>
  );
};

export default CardViewer;
