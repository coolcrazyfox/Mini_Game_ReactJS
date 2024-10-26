import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <Heading>UFO Mini Game</Heading>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 10px auto;
  color: #8bdc00;
  font-size: 28px;
  padding-inline: 36px;
  border-radius: 10px;
  width: 78vw;
  background: #7725c0f3;
  box-shadow: 0 0 10px 5px rgba(238, 241, 243, 0.5);
`;

export default Header;
