import styled from "styled-components";
import Center from "./Center";

const StyledFooter = styled.header`
  margin-top: 5rem;
  background-color: #333;
  @media screen and (min-width: 768px) {
  }
`;
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
const FooterWrapper = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Pretendard Variable", Pretendard;
  font-weight: 400;
  font-size: 0.8rem;
  align-items: center;
  color: whitesmoke;
  background-color: #333;
  div:last-child {
    margin-top: 1rem;
    color: #aaa;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    font-family: "Pretendard Variable", Pretendard;
    font-weight: 400;
    font-size: 1rem;
    color: whitesmoke;
    background-color: #333;
  }
`;

const Title = styled.div`
  font-family: "Pretendard Variable", Pretendard;
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <Wraper>
          <FooterWrapper>
            <Title>ChoonSimCoin</Title>
            <div>Copyright © choonsimcoin All Right Reserved.</div>
          </FooterWrapper>
        </Wraper>
      </Center>
    </StyledFooter>
  );
}
