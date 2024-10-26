import styled from "styled-components";
import { CardObj } from "./Game";
// import cardBackImage from "../libs/images/card-back.png";
import cardBackImage from "../libs/images/question-green.png";

type CardProps = {
  flippedImage: string;

  card: CardObj;
  cardIndex: number;
  handleClick: (cardIndex: number, card: CardObj) => void;
};

type CardFlippedImgProps = {
  found?: boolean;
};

const Card = ({
  flippedImage,
  handleClick,

  card,
  cardIndex,
}: CardProps): JSX.Element => {
  return (
    <CardContainer
      onClick={() => {
        handleClick(cardIndex, card);
      }}
      found={card.found ? true : false}
    >
      {card.flipped || card.found ? (
        <CardFlippedImage src={flippedImage} alt="Alt img item" />
      ) : (
        <CardImage src={cardBackImage} alt="Alt card back img" />
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div<CardFlippedImgProps>`
  box-sizing: border-box;
  border: ${(props) =>
    props.found ? "4px inset #1bed0cf3" : "4px inset #ee4839f3"};
  border-radius: 0.5rem;
  width: min(12vw, 10rem);
  height: min(15vw, 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  background-color: #62c6f7f3;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;
const CardFlippedImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 0.4rem;
`;
export default Card;
