import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px 0;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  img:hover {
    cursor: pointer;
    opacity: 0.8;
    animation: fade 1s;
  }
`;
