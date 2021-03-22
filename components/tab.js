import { useEffect, useState } from "react";
import styled from "styled-components";

const TabMenu = styled.div`
  display: flex;

  & > a > div {
    border: 1px solid black;
    width: 200px;
    heigh: 80px;
    display: flex;
    align-contents: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const TabBody = styled.div`
  border: 1px solid black;
  //   width: ${(props) => props.width}px;
  //   height: 400px;
`;

const Tab = ({ children }) => {
  const [currentTabIndex, setTab] = useState(0);
  return (
    <>
      <TabMenu>
        {children?.map((t, index) => {
          return (
            <a onClick={() => setTab(index)}>
              <div key={index}>{t.props.title}</div>
            </a>
          );
        })}
      </TabMenu>
      <TabBody width={200 * children.length}>
        {children && children[currentTabIndex]}
      </TabBody>
    </>
  );
};

export default Tab;
