import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import SettingBtn from "./SettingBtn";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
import { UserType } from "../../utils/types";
import { useStore } from "../../utils/store";

const Header: React.FC = () => {
  const [isModalOpen, setModal] = useState<number>(0); // 0: 닫기, 1: 로그인, 2: 가입
  const [userData, setUserData] = useState<UserType>({
    userId: "",
    password: "",
  });

  const setStorage = (token: string) => {
    setToken(token);
    window.localStorage.setItem("token", token);
  };

  const clearStorage = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // @ts-ignore
  const { setToken } = useStore();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className="disable-select">
            <Link href="/">
              <a>ToyBlog</a>
            </Link>
          </div>
        </div>
        <SettingBtn setModal={setModal} clearStorage={clearStorage} />
      </header>
      {/* login */}
      {isModalOpen === 1 && (
        <Login
          setModal={setModal}
          userData={userData}
          setUserData={setUserData}
          setStorage={setStorage}
        />
      )}
      {/* 회원가입 */}
      {isModalOpen === 2 && (
        <SignUp
          setModal={setModal}
          userData={userData}
          setUserData={setUserData}
          setStorage={setStorage}
        />
      )}
    </>
  );
};

export default Header;
