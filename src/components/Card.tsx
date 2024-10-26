import styled from "styled-components";
import { CardObj } from "./Game";
import cardBackImage from "../libs/images/question-lemon.png";

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
  border-radius: 1rem;
  width: min(15vw, 12rem);
  height: min(16vh, 12rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  background-color: ${(props) => (props.found ? "#1bed0cb5" : "#f0a284f3")};
  box-shadow: ${(props) =>
    props.found
      ? "0 0 10px 5px rgba(238, 241, 243, 0.5)"
      : "0 0 10px 5px rgba(0, 0, 0, 0.5)"};
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
const CardFlippedImage = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 1rem;
`;
export default Card;
