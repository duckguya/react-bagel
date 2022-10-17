import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100vw;
`;

const CoverWrapper = styled.div`
  height: 45rem;
  width: 100%;
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
    font-family: "Lobster", cursive;
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
const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Middle1 = styled.div`
  text-align: center;
  padding: 10rem 0;
  img {
    max-width: 20px;
    padding-bottom: 1rem;
  }
  p {
    font-family: "Lobster", cursive;
    font-size: 2rem;
  }
`;
const Middle2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
  height: 100%;
  span {
    font-size: 0.3rem;
  }
`;

const MiddleImgWrapper = styled(motion.div)`
  max-width: 16rem;
  max-height: 16rem;
  min-width: 16rem;
  min-height: 16rem;
  overflow: hidden;
`;

const MiddleImg = styled(motion.div)<{ imgName: string }>`
  /* background-image: url("/images/middle1.jpg"); */
  background-image: url(${(props) => props.imgName});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transform-origin: center center;
`;

const middleVariants = {
  initial: {
    width: "100%",
    height: "100%",
  },
  active: {
    width: "110%",
    height: "110%",
  },
  exit: { width: "100%", height: "100%" },
};

// const arr: Array<string> = ["1", "2", "3"];
const arr: Array<string> = [
  "/images/middle1.jpg",
  "/images/middle2.jpg",
  "/images/middle3.jpg",
];

function Home() {
  return (
    <Container>
      <CoverWrapper>
        <Helmet>
          <title>BagelShop</title>
        </Helmet>
        <Cover>
          <h1>Bagel</h1>
          <h1>at</h1>
          <h1>Home</h1>
          <CoverBtn>만나러 가기</CoverBtn>
        </Cover>
      </CoverWrapper>
      <MiddleWrapper>
        <Middle1>
          <img src="/images/double_quotation.png" />
          <p>Basic, Best, Bright, Brilliant</p>
        </Middle1>
        <Middle2>
          <>
            {arr &&
              arr.map((n) => (
                <MiddleImgWrapper>
                  <MiddleImg
                    imgName={n}
                    variants={middleVariants}
                    initial="initial"
                    whileHover="active"
                    exit="exit"
                    transition={{ type: "tween" }}
                  />
                </MiddleImgWrapper>
              ))}

            <p>Cafe Location</p>
            <p>Coffee Class</p>
            <p>Daily Bagel</p>
            <span>가까운 매장을 확인하세요</span>
            <span>가까운 매장을 확인하세요</span>
            <span>가까운 매장을 확인하세요</span>
            <span>더 알아보기</span>
            <span>더 알아보기</span>
            <span>더 알아보기</span>
          </>
        </Middle2>
      </MiddleWrapper>
    </Container>
  );
}

export default Home;
