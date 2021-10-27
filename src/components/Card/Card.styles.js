import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;

  :hover {
    cursor: pointer;
    opacity: 0.8;
    animation: fade 1s;
  }
`;
