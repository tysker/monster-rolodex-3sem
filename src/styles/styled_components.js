import styled from "styled-components";

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

export const MovieDetail = styled.div`
  color: white;
`;

export const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
