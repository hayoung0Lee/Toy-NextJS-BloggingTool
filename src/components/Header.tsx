import React, { useState } from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import styles from "./Header.module.css";
import { useStore } from "../utils/store";

const Layout: React.FC = () => {
  // TODO: Redux로 전역상태 관리해서 현재 어디있는지 파악
  // if username -> Username
  // else ToyBlog

  // @ts-ignore
  const { isOpen, toggleDropDown } = useStore();

  return (
    <header className={styles.header}>
      <div className={styles.leftWrapper}>
        <div className="disable-select">
          <Link href="/">
            <a>ToyBlog</a>
          </Link>
        </div>
      </div>
      <div className="disable-select">
        <span onClick={() => toggleDropDown(!isOpen)}>Setting</span>
        {isOpen && (
          <ul>
            <li>
              {/* TODO: hayoung -> general username */}
              <ActiveLink href="/hayoung" activeClassName={styles.selected}>
                <a>To my ToyBlog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/hayoung/write"
                activeClassName={styles.selected}
              >
                <a>New Post</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/intro" activeClassName={styles.selected}>
                <a>Intro</a>
              </ActiveLink>
            </li>
            <li>Login/Logout</li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Layout;
