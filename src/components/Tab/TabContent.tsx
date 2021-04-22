import React, { useEffect } from "react";

interface Props {
  children: React.ReactChild;
  title: string;
}
const TabContent: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default TabContent;
