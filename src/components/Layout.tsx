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
  const { isOpen, toggleDropDown } = useStore();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const newQuery = router.query;
      toggleDropDown(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
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
