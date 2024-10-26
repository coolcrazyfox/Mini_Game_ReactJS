import styled from "styled-components";

import videoBackground from "../assets/images/galaxy.jpg";

const Header = () => {
  return (
    <MainHeader>
      {/* <MainVideoContainer src={videoBackground}></MainVideoContainer> */}
      <Heading>React-App Memory Game</Heading>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  margin: 0 auto;
  text-align: center;
  // width: 100%;
`;
// const MainVideoContainer = styled.img`
//   display: flex;
//   flex-wrap: wrap;
//   height: 80vh;
//   border-radius: 10px;
//   margin: 10px auto;
//   background-image: url("images/wallSecond.jpg");
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
//   box-shadow: 0 0 50px 30px rgba(0, 0, 0, 0.5);
// `;
const Heading = styled.h1`
  color: #303030;
  font-size: 48px;
  padding-inline: 36px;
`;

export default Header;
