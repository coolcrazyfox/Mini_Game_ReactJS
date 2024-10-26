import styled from "styled-components";
import { useState } from "react";
import goodImage from "../assets/images/goodJob.png";
import notGoodImage from "../assets/images/notGood.png";
import starIcon from "../assets/images/star.png";
import emptyIcon from "../assets/images/emptyStar.png";

type EndInfoProps = {
  turns: number;
  score: number;
  resetGame: () => void;
};

const EndInfo = ({ resetGame, turns, score }: EndInfoProps) => {
  const [isFinished, setIsFinished] = useState(false);
  const notGoodResult = [
    { id: 1, name: "1-1", link: <StarItem /> },
    { id: 2, name: "2-1", link: <EmptyStarItem /> },
    { id: 3, name: "3-1", link: <EmptyStarItem /> },
    { id: 4, name: "4-1", link: <EmptyStarItem /> },
    { id: 5, name: "5-1", link: <EmptyStarItem /> },
  ];
  const normalResult = [
    { id: 6, name: "1-2", link: <StarItem /> },
    { id: 7, name: "2-2", link: <StarItem /> },
    { id: 8, name: "3-2", link: <StarItem /> },
    { id: 9, name: "4-2", link: <EmptyStarItem /> },
    { id: 10, name: "5-2", link: <EmptyStarItem /> },
  ];
  const goodResult = [
    { id: 11, name: "1-3", link: <StarItem /> },
    { id: 12, name: "2-3", link: <StarItem /> },
    { id: 13, name: "3-3", link: <StarItem /> },
    { id: 14, name: "4-3", link: <StarItem /> },
    { id: 15, name: "5-3", link: <StarItem /> },
  ];
  return (
    <EndGameContainer>
      {isFinished ? (
        <div>
          <p>Thanks for playing!</p>
          <button onClick={resetGame}>back</button>
        </div>
      ) : (
        <>
          {turns >= 40 ? <NoGoodJob /> : <GoodJobImg />}
          <StarsPointsContainer>
            {turns >= 40 ? (
              <NotGood>
                {notGoodResult.map((item, index) => {
                  return <div key={item.id}>{item.link}</div>;
                })}
              </NotGood>
            ) : (
              ""
            )}
            {turns >= 26 && turns <= 39 ? (
              <Normal>
                {normalResult.map((item, index) => {
                  return <div key={item.id}>{item.link}</div>;
                })}
              </Normal>
            ) : (
              ""
            )}
            {turns <= 25 ? (
              <NiceJob>
                {goodResult.map((item, index) => {
                  return <div key={item.id}>{item.link}</div>;
                })}
              </NiceJob>
            ) : (
              ""
            )}
          </StarsPointsContainer>
          <EndGameButtonContainer>
            <EndGameButtonYes onClick={resetGame}>Return</EndGameButtonYes>
            {turns >= 40 ? (
              ""
            ) : (
              <EndGameButtonNo onClick={() => setIsFinished(true)}>
                Next Level
              </EndGameButtonNo>
            )}
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

const StarsPointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NotGood = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 55px;
`;
const Normal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 55px;
`;
const NiceJob = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 55px;
`;
const StarItem = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 12px 0 12px;
  background: url(${starIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const EmptyStarItem = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 12px 0 12px;
  background: url(${emptyIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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
const NoGoodJob = styled.div`
  display: flex;
  height: 60vh;
  background-repeat: no-repeat;
  background: url(${notGoodImage});
  background-position: center center;
  background-size: cover;
`;
const GoodJobImg = styled.div`
  display: flex;
  height: 60vh;
  background-repeat: no-repeat;
  background: url(${goodImage});
  background-position: center center;
  background-size: cover;
`;
export default EndInfo;
