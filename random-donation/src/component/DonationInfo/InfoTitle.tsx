import React from "react";
import styled from "styled-components";

import { device } from "../../services/devices";

const InfoTitleWrapper = styled.div`
  width: 55%;
  height: 100%;
  background: #121212;

  @media ${device.tablet} {
    width: 100%;
    height: 450px;
    font-size: 9px;
  }
`;
const TitleWrapper = styled.div`
  padding: 50px 70px;
  @media ${device.mobileL} {
    padding: 50px 0px;
    width: 80%;
    margin: 0 auto;
    height: 450px;
    font-size: 9px;
  }
`;
const ThinWhiteTitle = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 6.8em;

  @media ${device.laptop} {
    font-size: 5em;
  }
`;
const BoldYellowTitle = styled.h1`
  color: #deddb6;
  font-weight: bold;
  font-size: 6.8em;

  @media ${device.laptop} {
    font-size: 5em;
  }
`;
const BorderBottom = styled.div`
  margin: 30px 0px;
  width: 60%;
  height: 4px;
  background: white;

  @media ${device.laptopL} {
    width: 80%;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;
const DetailWord = styled.p`
  color: white;
  font-weight: 100;
  font-size: 1.1em;
  margin: 1px 0px;

  @media ${device.laptop} {
    font-size: 0.9em;
  }
  @media ${device.tablet} {
    font-size: 1.6em;
  }
`;
const BoldWord = styled.b`
  font-weight: bold;
`;

const InfoTitle = () => {
  return (
    <InfoTitleWrapper>
      <TitleWrapper>
        <ThinWhiteTitle>2022달력</ThinWhiteTitle>
        <ThinWhiteTitle>수고비</ThinWhiteTitle>
        <BoldYellowTitle>랜덤</BoldYellowTitle>
        <BoldYellowTitle>도네이션!</BoldYellowTitle>
        <BorderBottom />
        <DetailWord>
          성황리에 끝난 2022달력! 이제 마지막 할 일 정산시간이
          <br />
          당신을 기다리고 있다! 근데 이제 <BoldWord>랜덤 도네이션</BoldWord>을
          곁들인...
        </DetailWord>
      </TitleWrapper>
    </InfoTitleWrapper>
  );
};

export default InfoTitle;
