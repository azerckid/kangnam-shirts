import styled from "styled-components";

const StyleProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding-top: 2rem;
  background-color: #000;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function ProductGrid({ children }) {
  return <StyleProductGrid>{children}</StyleProductGrid>;
}
