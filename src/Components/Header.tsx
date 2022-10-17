import styled from "styled-components";
// import logo from "./assets/logo192.png";
// import logo from "public/logo192.png";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.light.lighter};
  position: fixed;
  border-bottom: 1px solid ${(props) => props.theme.light.backColor};
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  max-width: 35px;
  cursor: pointer;
`;
const Menus = styled.div`
  padding-left: 1.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.dark.fontColor};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
const NavOthers = styled.div`
  display: flex;
`;

function Header() {
  return (
    <>
      <Nav>
        <NavMenu>
          <Logo src="/images/logo2.png" alt="" />
          <Menus>ABOUT</Menus>
          <Menus>VISIT</Menus>
          <Menus>LEARN</Menus>
          <Menus>SHOP</Menus>
          <Menus>CONTACT</Menus>
        </NavMenu>
        <NavOthers>
          <Menus>LOGIN</Menus>
          <Menus>MYPAGE</Menus>
        </NavOthers>
      </Nav>
    </>
  );
}
export default Header;
