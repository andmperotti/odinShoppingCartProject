import styled from "styled-components";

const Navbar = ({ className }) => <nav className={className}>Nav</nav>;

const StyledNavbar = styled(Navbar)`
  height: fit-content;
  background: gray;
`;
export { StyledNavbar, Navbar };
