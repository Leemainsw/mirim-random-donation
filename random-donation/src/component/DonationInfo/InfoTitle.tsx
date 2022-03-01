import React from "react";
import styled from "styled-components";

const InfoTitleWrapper = styled.div`
  width: 55%;
  height: 100%;
  background: #121212;
`;
const TitleWrapper = styled.div`
  padding: 50px 70px;
`;
const ThinWhiteTitle = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 6.8em;
`;
const BoldYellowTitle = styled.h1`
  color: #deddb6;
  font-weight: bold;
  font-size: 6.8em;
`;
const BorderBottom = styled.div`
  margin: 30px 0px;
  width: 60%;
  height: 4px;
  background: white;
`;
const DetailWord = styled.p`
  color: white;
  font-weight: 100;
  font-size: 1.1em;
  margin: 1px 0px;
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
        </DetailWord>
        <DetailWord>
          당신을 기다리고 있다! 근데 이제 <BoldWord>랜덤 도네이션</BoldWord>을
          곁들인...
        </DetailWord>
      </TitleWrapper>
    </InfoTitleWrapper>
  );
};

export default InfoTitle;
