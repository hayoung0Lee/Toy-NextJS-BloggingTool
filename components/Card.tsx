import React from "react";
import styles from "./Card.module.css";
import { PostType } from "../utils/types";
import Link from "next/link";

interface Props {
  d: PostType;
}

const CardViewer: React.FC<Props> = ({ d }) => {
  return (
    // TODO: hayoung -> username
    <Link href={`/hayoung/${d.id}`}>
      <div className={styles.card}>{d.id}</div>
    </Link>
  );
};

export default CardViewer;
