import React from "react";
import styles from "./Card.module.css";
import Card from "./Card";

interface Props {
  data: number[];
}

const CardViewer: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.cardViewer}>
      {data.map((d, index) => {
        return <Card key={index} d={d} />;
      })}
    </div>
  );
};

export default CardViewer;
