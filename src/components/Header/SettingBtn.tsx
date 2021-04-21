import React, { useEffect } from "react";
import { debounce } from "../../utils/debounce";
import { useStore } from "../../utils/store";
import ActiveLink from "../ActiveLink";
import styles from "./Header.module.css";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<number>>;
  clearStorage: () => void;
}

const SettingBtn: React.FC<Props> = ({ setModal, clearStorage }) => {
  // @ts-ignore
  const { isOpen, debounceToggleDropDown, token, setToken } = useStore();

  useEffect(() => {
    if (window) {
      // 현재 토큰값 읽어오기, 없으면 ""
      const token = window.localStorage.getItem("token") || "";
      setToken(token);
    }
  }, [token]);

  const handleModal = (value: number) => {
    setModal(value);
  };

  const debounceModal = debounce(handleModal, 200);

  return (
    <>
      <div className="disable-select">
        <span
          onClick={() => {
            debounceToggleDropDown(!isOpen);
          }}
        >
          {token === "" ? `Setting` : token}
        </span>
        {isOpen && (
          <ul>
            {token !== "" && (
              <>
                <li>
                  <ActiveLink
                    href={`/${token}`}
                    activeClassName={styles.selected}
                  >
                    <a>To my ToyBlog</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    href={`/${token}/write`}
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
            {token === "" ? (
              <>
                <li className={styles.logoutBtnWrapper}>
                  <a
                    className={styles.logoutBtn}
                    onClick={() => debounceModal(1)}
                  >
                    Login
                  </a>
                </li>
                <li className={styles.logoutBtnWrapper}>
                  <a
                    className={styles.logoutBtn}
                    onClick={() => debounceModal(2)}
                  >
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
