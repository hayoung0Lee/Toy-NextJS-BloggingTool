import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

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
        display: flex;
        justify-content: space-between;
    }

    & nav {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & main {
        min-height: calc(100vh - 120px)
    }

    & footer {
        height: 60px;
        border-top 1px solid green;
    }
`;

const Logo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Layout = ({ children }) => {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const router = useRouter();
  const isInsideBlog = router.query.username === undefined ? false : true;

  return (
    <LayoutWrapper>
      <header>
        <Link href={`/`}>
          <Logo>{username}' Blog</Logo>
        </Link>
        <nav>
          {!isInsideBlog && (
            <Link href={`/${username}`}>
              <a>Visit {username}'s Blog</a>
            </Link>
          )}
          {isInsideBlog && (
            <Link href={`/${username}/write`}>
              <a>Write</a>
            </Link>
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer>Can you see me...? I'm Footer Lee</footer>
    </LayoutWrapper>
  );
};

export default Layout;
