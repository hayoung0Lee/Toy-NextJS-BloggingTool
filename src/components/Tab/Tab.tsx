import React, { useEffect, useState } from "react";
import styles from "./Tab.module.css";

const Tab = ({ children }) => {
  const [currentTabIndex, setTab] = useState(0);
  return (
    <>
      <div className={styles.tabMenu}>
        {children?.map((t, index) => {
          return (
            <a key={index} onClick={() => setTab(index)}>
              <div
                className={`${styles.tabBtn} ${
                  index === currentTabIndex ? styles.active : ""
                }`}
              >
                {t.props.title}
              </div>
            </a>
          );
        })}
      </div>
      <>{children && children[currentTabIndex]}</>
    </>
  );
};

export default Tab;
