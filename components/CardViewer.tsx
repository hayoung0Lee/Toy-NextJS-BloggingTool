import React from "react";
import styles from "./Card.module.css";
import Card from "./Card";
import { PostType } from "../utils/types";

interface Props {
  data: PostType[];
}

const CardViewer: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.cardViewer}>
      {data?.map((d, index) => {
        return <Card key={index} d={d} />;
      })}
    </div>
  );
};

export default CardViewer;
