import React from "react";
import styled from "styled-components";

interface RankTitle {
  width?: string;
  isFirst?: boolean;
}

const RankOptionWrapper = styled.div`
  width: 95%;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
`;
const RankTitle = styled.h1`
  color: #a53232;
  font-size: 1.4em;
  font-weight: bold;
  width: ${(props: RankTitle) => props.width};
  color: ${(props: RankTitle) => (props.isFirst ? "#a53232" : "#121212")};
`;

const RankOption = () => {
  return (
    <RankOptionWrapper>
      <RankTitle width={"60px"}>1위</RankTitle>
      <RankTitle width={"100px"}>양아름</RankTitle>
      <RankTitle>30,000원</RankTitle>
    </RankOptionWrapper>
  );
};

export default RankOption;
