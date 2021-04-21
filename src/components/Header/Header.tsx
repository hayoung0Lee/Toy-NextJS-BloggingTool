import React, { useEffect, useState } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink";
import styles from "./Header.module.css";
import { useStore } from "../../utils/store";
import { debounce } from "../../utils/debounce";
import Modal from "../Modal/Modal";

const Header: React.FC = () => {
  // @ts-ignore
  const { isOpen, toggleDropDown, debounceToggleDropDown } = useStore();
  const [isModalOpen, setModal] = useState<number>(0); // 0: 닫기, 1: 로그인, 2: 가입
  const [loginStatus, setLoginStatus] = useState<string>("");
  const [userData, setUserData] = useState<{
    userId: string;
    password: string;
  }>({ userId: "", password: "" });

  const clearStorage = () => {
    setLoginStatus("");
    window.localStorage.removeItem("token");
  };

  const setStorage = (token: string) => {
    setLoginStatus(token);
    window.localStorage.setItem("token", token);
  };

  useEffect(() => {
    if (window) {
      // 현재 토큰값 읽어오기, 없으면 ""
      const token = window.localStorage.getItem("token") || "";
      setLoginStatus(token);
    }
  }, [loginStatus]);

  // TODO: modal 창 만들기
  // login 기능 prototype으로 구현하고, to my blog username 적용할수 있도록 하기
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
        <div className="disable-select">
          <span
            onClick={() => {
              debounceToggleDropDown(!isOpen);
            }}
          >
            {loginStatus === "" ? `Setting` : loginStatus}
          </span>
          {isOpen && (
            <ul>
              {loginStatus !== "" && (
                <>
                  <li>
                    {/* TODO: hayoung -> general username */}
                    <ActiveLink
                      href={`/${loginStatus}`}
                      activeClassName={styles.selected}
                    >
                      <a>To my ToyBlog</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink
                      href={`/${loginStatus}/write`}
                      activeClassName={styles.selected}
                    >
                      <a>New Post</a>
                    </ActiveLink>
                  </li>
                </>
              )}
              <li>
                <ActiveLink href="/intro" activeClassName={styles.selected}>
                  <a>Intro</a>
                </ActiveLink>
              </li>
              {loginStatus === "" ? (
                <>
                  <li className={styles.logoutBtnWrapper}>
                    <a className={styles.logoutBtn} onClick={() => setModal(1)}>
                      Login
                    </a>
                  </li>
                  <li className={styles.logoutBtnWrapper}>
                    <a className={styles.logoutBtn} onClick={() => setModal(2)}>
                      SignUp
                    </a>
                  </li>
                </>
              ) : (
                <li className={styles.logoutBtnWrapper}>
                  <a
                    className={styles.logoutBtn}
                    onClick={() => {
                      clearStorage();
                    }}
                  >
                    Logout
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </header>
      {/* login */}
      {isModalOpen === 1 && (
        <Modal
          closeModal={() => {
            setModal(0);
          }}
        >
          <div>
            <h1>로그인</h1>
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                const response = await fetch(`/api/users/login`, {
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
                alert("try again, unAuthorized");
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
      )}
      {/* 회원가입 */}
      {isModalOpen === 2 && (
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
      )}
    </>
  );
};

export default Header;
