import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import SettingBtn from "./SettingBtn";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
import { UserType } from "../../utils/types";

const Header: React.FC = () => {
  const [isModalOpen, setModal] = useState<number>(0); // 0: 닫기, 1: 로그인, 2: 가입
  const [userData, setUserData] = useState<UserType>({
    userId: "",
    password: "",
  });

  const setStorage = (token: string) => {
    setLoginStatus(token);
    window.localStorage.setItem("token", token);
  };

  const clearStorage = () => {
    setLoginStatus("");
    window.localStorage.removeItem("token");
  };

  const [loginStatus, setLoginStatus] = useState<string>("");

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
        <SettingBtn
          // isModalOpen={isModalOpen}
          setModal={setModal}
          loginStatus={loginStatus}
          setLoginStatus={setLoginStatus}
          // setStorage={setStorage}
          clearStorage={clearStorage}
        />
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
