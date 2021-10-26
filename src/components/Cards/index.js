import { Wrapper, Content } from "./Cards.styles";

const Cards = (props) => (
  <Wrapper>
    <Content>{props.children}</Content>
  </Wrapper>
);

export default Cards;
