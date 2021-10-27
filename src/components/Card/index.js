import { Image } from "./Card.styles";

const Card = ({ img, onClick, id }) => (
  <Image src={img} onClick={() => onClick(id)} />
);

export default Card;
