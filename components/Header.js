import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
  background-color: #222;
  @media screen and (min-width: 768px) {
  }
`;
const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0 1rem;
  position: relative;
  z-index: 1;
`;
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Center>
        <Wraper>
          <Logo>ChoonSimCoin</Logo>
        </Wraper>
      </Center>
    </StyledHeader>
  );
}
