import React from "react";
import styled from "styled-components";
import FeedBack from "../component/Result/FeedBack";
import RankList from "../component/Result/RankList";
import ResultText from "../component/Result/ResultText";

import { device, min_device } from "../services/devices";
import thankYou from "../assets/thanks.png";

const Container = styled.div`
  width: 100%;
  font-size: 15px;

  @media ${min_device.tablet} {
    overflow: hidden;
    height: 100vh;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
const ResultWrapper = styled.div`
  width: 940px;
  height: 100%;
  margin: 0 auto;

  @media ${min_device.tablet} {
    padding: 20px;
  }
  @media ${device.tablet} {
    width: 90%;
    margin: 30px auto;
  }
`;
const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    display: block;
  }
`;
const Bottom = styled.div`
  @media ${min_device.tablet} {
    margin: 2% 0;
    width: 100%;
    height: 90%;
  }
  @media ${device.tablet} {
    margin-top: 25px;
  }
`;
const RightContent = styled.div`
  width: 35%;

  @media ${device.tablet} {
    width: 100%;
    margin-top: 25px;
  }
`;
const BannerContent = styled.div`
  @media ${min_device.tablet} {
    height: 35%;
    display: flex;
    flex-direction: column-reverse;
  }
`;
const Banner = styled.img`
  width: 100%;
  cursor: pointer;
  @media ${device.tablet} {
    margin-top: 25px;
    height: 370px;
  }
  @media (max-width: 750px) {
    height: 340px;
  }
  @media (max-width: 630px) {
    height: 300px;
  }
  @media (max-width: 570px) {
    height: 280px;
  }
  @media (max-width: 540px) {
    height: 240px;
  }
  @media ${device.mobileL} {
    height: 220px;
  }
  @media (max-width: 400px) {
    height: 200px;
  }
  @media ${device.mobileM} {
    height: 170px;
  }
`;

const Result = (): JSX.Element => {
  const GoYoutube = () => {};

  return (
    <Container>
      <ResultWrapper>
        <Top>
          <ResultText />
          <RightContent>
            <RankList />
            <BannerContent>
              <a href="https://www.youtube.com/watch?v=VdVq1r7OdGM">
                <Banner src={thankYou} />
              </a>
            </BannerContent>
          </RightContent>
        </Top>
        <Bottom>
          <FeedBack />
        </Bottom>
      </ResultWrapper>
    </Container>
  );
};

export default Result;
