import styled from "styled-components";

type PlayerInfoProps = {
  turns: number;
  score: number;
};

const PlayerInfo = ({ turns, score }: PlayerInfoProps) => {
  return (
    <Wrapper>
      <InfoTurns>
        {`Turns: `}
        <strong>{`${turns}`}</strong>
      </InfoTurns>
      <InfoPairsFound>
        {`Pairs found: `}
        <strong>{`${score}`}</strong>
      </InfoPairsFound>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  // margin-top: auto;
  // font-size: 20px;
`;
const InfoTurns = styled.p`
  color: #fff;
  font-size: 24px;
`;
const InfoPairsFound = styled.p`
  color: #fff;
  font-size: 24px;
`;
export default PlayerInfo;
