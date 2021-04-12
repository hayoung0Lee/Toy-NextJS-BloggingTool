import React, { useState } from "react";
import Link from "next/link";

const Layout: React.FC = () => {
  // TODO: Redux로 전역상태 관리해서 현재 어디있는지 파악
  // if username -> Username
  // else ToyBlog
  const [isOpen, toggleDropDown] = useState<boolean>(false);

  return (
    <header>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div className="disable-select">
        <span onClick={() => toggleDropDown(!isOpen)}>Setting</span>
        {isOpen && (
          <ul>
            <li>
              {/* TODO: hayoung -> general username */}
              <Link href="/hayoung">
                <a>To my ToyBlog</a>
              </Link>
            </li>
            <li>
              <Link href="/hayoung/write">
                <a>New Post</a>
              </Link>
            </li>
            <li>Login/Logout</li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Layout;
