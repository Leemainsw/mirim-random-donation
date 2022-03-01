import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 55%;
  height: 100%;
  background: #121212;
`;
const ThinWhiteTitle = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 80px;
`;

const InfoTitle = () => {
  return (
    <TitleWrapper>
      <ThinWhiteTitle>2022달력</ThinWhiteTitle>
      <ThinWhiteTitle>수고비</ThinWhiteTitle>
    </TitleWrapper>
  );
};

export default InfoTitle;
