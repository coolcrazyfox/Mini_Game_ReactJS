import styled from "styled-components";
import { useState } from "react";
import goodImage from "../assets/images/goodJob.png";

type EndInfoProps = {
  resetGame: () => void;
};

const EndInfo = ({ resetGame }: EndInfoProps) => {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <EndGameContainer>
      {isFinished ? (
        <p>Thanks for playing!</p>
      ) : (
        <>
          <GoodJobImg />
          {/* <p>You found all of the matching cards!</p> */}
          {/* <p>Would you like to play again?</p> */}
          <EndGameButtonContainer>
            <EndGameButtonYes onClick={resetGame}>Return</EndGameButtonYes>
            <EndGameButtonNo onClick={() => setIsFinished(true)}>
              Next Level
            </EndGameButtonNo>
          </EndGameButtonContainer>
        </>
      )}
    </EndGameContainer>
  );
};

const EndGameContainer = styled.section`
  margin: auto;
  text-align: center;
  font-size: 32px;
`;

const EndGameButtonContainer = styled.div`
  width: 70%;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const EndGameButtonYes = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 400px;
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
const EndGameButtonNo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 400px;
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
const GoodJobImg = styled.div`
  display: flex;
  height: 50vh;
  background-repeat: no-repeat;
  background: url(${goodImage});
  background-position: center center;
  background-size: cover;
`;
export default EndInfo;
