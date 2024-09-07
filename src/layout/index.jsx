import { Link } from "react-router-dom";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <AppContainer>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/idle">Idle timer</Link>
          <Link to="/pdf">PDF</Link>
        </nav>
      </header>
      {children}
    </AppContainer>
  );
};

export default Layout;

const AppContainer = styled.div`
  header {
    background: #000;
    border-bottom: 1px solid #fff;
    color: #fff;
    padding: 18px 48px;
    nav {
      a {
        padding: 0 24px;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
