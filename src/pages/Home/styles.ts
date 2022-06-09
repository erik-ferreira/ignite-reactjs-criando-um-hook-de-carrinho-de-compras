import styled from "styled-components";
import { darken } from "polished";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;
