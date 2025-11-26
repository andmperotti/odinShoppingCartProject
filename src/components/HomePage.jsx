import styled from "styled-components";
import MysteryImage from "../../public/MysteryDeal.png";

function HomePage({ className }) {
  return (
    <div className={className} data-testid="HomePage">
      <h1>Random Store</h1>
      <img src={MysteryImage} alt="mystery box" />
    </div>
  );
}

const StyledHomePage = styled(HomePage)`
  h1 {
    text-align: center;
  }
  img {
    margin: auto;
    max-height: 900px;
  }
`;
export { HomePage, StyledHomePage };
