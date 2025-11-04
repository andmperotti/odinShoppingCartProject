import styled from "styled-components";

const Navbar = ({ className, itemCount }) => (
  <nav className={className}>Nav CartItems:{itemCount}</nav>
);

const StyledNavbar = styled(Navbar)`
  height: fit-content;
  background: gray;
`;
export { StyledNavbar, Navbar };
