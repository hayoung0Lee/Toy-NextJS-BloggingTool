import React from "react";
import Modal from "./Modal";
import { useStore } from "../../utils/store";
import { UserType } from "../../utils/types";
import styles from "./Modal.module.css";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<number>>;
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  setStorage: (token: string) => void;
}

const Login: React.FC<Props> = ({
  setModal,
  userData,
  setUserData,
  setStorage,
}) => {
  // @ts-ignore
  const { toggleDropDown, sendMessage } = useStore();

  return (
    <Modal
      closeModal={() => {
        setModal(0);
      }}
    >
      <div className={styles.formStyle}>
        <h1>로그인</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await fetch(`/api/users/login`, {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              body: JSON.stringify({
                userId: userData.userId,
                password: userData.password,
              }),
            });
            const result = await response.json();
            console.log("result", result);
            if (result.token) {
              setStorage(result.token);
              toggleDropDown(false);
              setModal(0);
              sendMessage("로그인에 성공했습니다(Login Success)");
              return;
            }
            sendMessage("try again, unAuthorized");
          }}
        >
          <p>
            <input
              type="text"
              value={userData.userId}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserData({ ...userData, userId: event.target.value });
              }}
            ></input>
          </p>
          <p>
            <input
              type="password"
              value={userData.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserData({ ...userData, password: event.target.value });
              }}
            ></input>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
