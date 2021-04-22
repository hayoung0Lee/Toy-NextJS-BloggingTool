import React from "react";
import styles from "./Modal.module.css";

interface Props {
  children: React.ReactChild;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, closeModal }) => {
  return (
    <>
      <div className={styles.modalWrapper} onClick={() => closeModal()}></div>
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export default Modal;
