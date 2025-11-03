import styled from "styled-components";

function HomePage({ className }) {
  return <div className={className}>Home</div>;
}

const StyledHomePage = styled(HomePage)`
  background: lightgreen;
`;
export { HomePage, StyledHomePage };
