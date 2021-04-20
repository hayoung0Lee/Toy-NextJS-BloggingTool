import React from "react";
import styles from "./Card.module.css";
import { ArticleType } from "../utils/types";
import Link from "next/link";

interface Props {
  d: ArticleType;
}

const CardViewer: React.FC<Props> = ({ d }) => {
  return (
    // TODO: hayoung -> username
    <Link href={`/hayoung/${d.articleId}`}>
      <div className={styles.card}>
        <ul>
          <li>{d.articleId}</li>
          <li>{d.author}</li>
          <li>title: {d.title}</li>
          <li>Content: {d.contents}</li>
          <li>viewCount: {d.viewCount}</li>
        </ul>
      </div>
    </Link>
  );
};

export default CardViewer;
