import React, { useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";
import { useStore } from "../../utils/store";
import ActiveLink from "../ActiveLink";
import styles from "./Header.module.css";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<number>>;
  loginStatus: string;
  setLoginStatus: React.Dispatch<React.SetStateAction<string>>;
  clearStorage: () => void;
}

const SettingBtn: React.FC<Props> = ({
  setModal,
  loginStatus,
  setLoginStatus,
  clearStorage,
}) => {
  // @ts-ignore
  const { isOpen, debounceToggleDropDown } = useStore();

  useEffect(() => {
    if (window) {
      // 현재 토큰값 읽어오기, 없으면 ""
      const token = window.localStorage.getItem("token") || "";
      setLoginStatus(token);
    }
  }, [loginStatus]);

  return (
    <>
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
    </>
  );
};

export default SettingBtn;
