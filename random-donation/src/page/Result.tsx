import React from "react";
import styled from "styled-components";
import FeedBack from "../component/Result/FeedBack";
import RankList from "../component/Result/RankList";
import ResultText from "../component/Result/ResultText";

import { device } from "../services/devices";
import imageSrc from "../assets/thanks.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 15px;
`;
const ResultWrapper = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
`;
const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;
const Bottom = styled.div`
  width: 100%;
  height: 90%;
  margin: 2% 0;
`;

const Result = (): JSX.Element => {
  return (
    <Container>
      <ResultWrapper>
        <Top>
          <ResultText />
          <RankList />
        </Top>
        <Bottom>
          <FeedBack />
        </Bottom>
      </ResultWrapper>
    </Container>
  );
};

export default Result;
