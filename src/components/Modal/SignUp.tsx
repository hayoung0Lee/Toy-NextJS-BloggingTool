import React from "react";
import styles from "./Modal.module.css";
import Modal from "./Modal";
import { useStore } from "../../utils/store";
import { UserType } from "../../utils/types";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<number>>;
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  setStorage: (token: string) => void;
}

const SignUp: React.FC<Props> = ({
  setModal,
  userData,
  setUserData,
  setStorage,
}) => {
  // @ts-ignore
  const { toggleDropDown } = useStore();

  return (
    <Modal
      closeModal={() => {
        setModal(0);
      }}
    >
      <div>
        <h1>회원가입</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const response = await fetch(`/api/users/signUp`, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              body: JSON.stringify({
                userId: userData.userId,
                password: userData.password,
              }),
            });
            const result = await response.json();
            if (result.token) {
              setStorage(result.token);
              toggleDropDown(false);
              setModal(0);
              return;
            }
            alert("try again, signUp failed");
          }}
        >
          <input
            type="text"
            value={userData.userId}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserData({ ...userData, userId: event.target.value });
            }}
          ></input>
          <input
            type="password"
            value={userData.password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserData({ ...userData, password: event.target.value });
            }}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
