import styled from "styled-components";

const StyledGridUnit = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #000;
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export default function GridUnit({ children }) {
  return <StyledGridUnit>{children}</StyledGridUnit>;
}
