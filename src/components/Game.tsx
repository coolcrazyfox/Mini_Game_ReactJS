import cards from "../libs/Cards";
import CardGrid from "./CardGrid";
import PlayerInfo from "./PlayerInfo";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EndInfo from "./EndInfo";
import mainImage from "../assets/images/mainBg.jpg";
import firstImage from "../assets/images/firstLevel.jpg";

export interface CardObj {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
  found: boolean;
}

const Game = (): JSX.Element => {
  const [randomCards, setRandomCards] = useState<CardObj[] | null>(null);
  const [score, setScore] = useState<number>(0);
  const [turns, setTurns] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<CardObj[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  let pairsToFind = 8;

  const randomiseCards = () => {
    let randomOrderArr = [];
    let cardsArr = cards;
    for (let i = cardsArr.length; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      randomOrderArr.push(cardsArr[randomIndex]);
      cardsArr = [
        ...cardsArr.slice(0, randomIndex),
        ...cardsArr.slice(randomIndex + 1),
      ];
    }
    return randomOrderArr;
  };

  if (!randomCards) {
    const newState = randomiseCards();
    setRandomCards(newState);
  }
  useEffect(() => {
    if (score === pairsToFind) {
      setTimeout(() => {
        setGameFinished(true);
        setRandomCards(null);
      }, 1000);
    }
  }, [score]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (randomCards) {
        setTurns(turns + 1);
        let newState: CardObj[] = [];
        if (selectedCards[0].name === selectedCards[1].name) {
          setScore(score + 1);
          newState = randomCards.map((card) => {
            if (card.name === selectedCards[0].name) {
              return { ...card, found: true, flipped: false };
            }
            return card;
          });
        } else {
          newState = randomCards.map((card) => {
            if (
              card.name === selectedCards[0].name ||
              card.name === selectedCards[1].name
            ) {
              return { ...card, flipped: false };
            }
            return card;
          });
        }
        setTimeout(() => {
          setRandomCards(newState);
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  const handleClick = (cardIndex: number, card: CardObj) => {
    if (isPlaying) {
      if (selectedCards.length < 2) {
        setFlippedStatus(cardIndex);
        updateSelectedCards(card);
      } else {
      }
    }
  };

  const setFlippedStatus = (cardIndex: number) => {
    if (randomCards) {
      if (
        randomCards[cardIndex].flipped === true ||
        randomCards[cardIndex].found === true
      ) {
        return;
      }
      const newState = randomCards.map((card, index) => {
        if (index === cardIndex) {
          return { ...card, flipped: true };
        }
        return card;
      });
      setRandomCards(newState);
    }
  };

  const updateSelectedCards = (card: CardObj) => {
    if (card.flipped === true) {
      return;
    }
    if (card.found === true) {
      return;
    }
    setSelectedCards([...selectedCards, card]);
  };

  const resetGame = () => {
    setScore(0);
    setTurns(0);
    setSelectedCards([]);
    setGameFinished(false);
    const newState = randomiseCards();
    setRandomCards(newState);
    setIsPlaying(false);
  };

  const startGame = () => {
    const newState = randomiseCards();
    setRandomCards(newState);
    setIsPlaying(true);
  };

  return (
    <GameContainer>
      {gameFinished ? (
        <EndInfo resetGame={resetGame} turns={turns} />
      ) : isPlaying ? (
        <FirstLevelContainer>
          <CardGrid randomCards={randomCards} handleClick={handleClick} />
        </FirstLevelContainer>
      ) : (
        <StartContainer>
          <TitleText>Press Start to play!</TitleText>
          <StartButton onClick={startGame}>Start</StartButton>
        </StartContainer>
      )}
      {isPlaying ? <PlayerInfo turns={turns} score={score} /> : ""}
    </GameContainer>
  );
};

const GameContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #fff;
  padding: 1rem;
  border-radius: 10px;
  background: #7825c0c8;
  box-shadow: 0 2px 15px 5px rgba(238, 241, 243, 0.5);
`;

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 98%;
  border-radius: 10px;
  text-align: center;
  margin-top: auto;
  font-size: 2rem;
  background-repeat: no-repeat;
  background: url(${mainImage});
  background-position: center center;
  background-size: cover;
  box-shadow: 0 10px 10px 10px rgba(0, 241, 243, 0.5);
`;
const FirstLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 98%;
  border-radius: 10px;
  text-align: center;
  margin-top: auto;
  font-size: 2rem;
  background-repeat: no-repeat;
  background: url(${firstImage});
  background-position: center center;
  background-size: cover;
  border-left: 1px solid white;
  border-top: 1px solid black;
  box-shadow: 0 0 20px 7px rgba(20, 0, 243, 0.5);
`;
const TitleText = styled.p`
  color: #7ac70c;
  font-size: 5rem;
  margin-bottom: 10%;
`;
const StartButton = styled.button`
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  color: #fff;
  background: #8bdc00;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #7ac70c;
`;

export default Game;
