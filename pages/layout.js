import styled from "styled-components";

const LayoutWrapper = styled.div`
    width: 1440px;
    margin: auto;

    @media (max-width: 1440px) {
        width: 95vw;
    }

    @media (max-width: 1000px) {
        width: 100vw;
    }

    & header {
        height: 60px;
        border-bottom: 1px solid green;
    }

    & main {
        min-height: calc(100vh - 120px)
    }

    & footer {
        height: 60px;
        border-top 1px solid green;
    }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <header>My Blog</header>
      <main>{children}</main>
      <footer>Can you see me...? I'm Footer Lee</footer>
    </LayoutWrapper>
  );
};

export default Layout;
