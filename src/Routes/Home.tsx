import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  height: 45rem;
  width: 100vw;
  padding-top: 3rem;
`;
const Cover = styled.div`
  background-image: url("/images/mainImg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 5rem;
    color: white;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
  }
`;
const CoverBtn = styled.div`
  border: 1px solid white;
  padding: 0.7rem 1.5rem;
  font-size: 0.7rem;
  color: white;
  font-weight: 400;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #b3b3b3b8;
    border: none;
  }
  &:active {
    background-color: #606060b3;
    border: none;
  }
`;

function Home() {
  return (
    <Container>
      <Helmet>
        <title>BagelShop</title>
      </Helmet>
      <Cover>
        <h1>Bagel</h1>
        <h1>at</h1>
        <h1>Home</h1>
        <CoverBtn>만나러 가기</CoverBtn>
      </Cover>
    </Container>
  );
}

export default Home;
