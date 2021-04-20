import React, { useEffect } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { useStore } from "../utils/store";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  // @ts-ignore
  const { isOpen, toggleDropDown, setReset } = useStore();

  useEffect(() => {
    const handleWritingMode = (route: string) => {
      // https://stackoverflow.com/questions/63064778/next-js-warn-user-for-unsaved-form-before-route-change
      const regex = /\/\w*\/write/g;
      const found = window.location.pathname.match(regex);

      // found: 지금 write Page에 있는것
      // write page -> write page로
      if (found && route.match(regex)) {
        if (!window.confirm("새글을 작성하시겠습니까?")) {
          router.events.emit("routeChangeError");
          throw `Route change to "${route}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
        }
        setReset(true);
        return true;
      }

      if (found) {
        if (!window.confirm("다른페이지로 이동하시겠습니까?")) {
          router.events.emit("routeChangeError");
          throw `Route change to "${route}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`;
        }
        return true;
      }
    };

    const handleRouteChange = (url, { shallow }) => {
      toggleDropDown(false);
    };

    router.events.on("routeChangeStart", handleWritingMode);
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleWritingMode);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
