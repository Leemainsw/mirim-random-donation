import React from "react";
import styled from "styled-components";
import { device } from "../../services/devices";

const FeedBackWrapper = styled.div`
  width: 100%;
  height: 48%;
  background: #f6f6f6;
`;
const Wrapper = styled.div`
  padding: 40px 50px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  font-weight: 800;
  font-size: 1.6em;
  width: 100%;
`;
const Detail = styled.p`
  font-size: 1em;
  margin: 5px 0px;
  color: #5f5f5f;
`;
const TextInput = styled.textarea`
  margin: 5px 0px;
  font-family: Noto Sans KR;
  width: 100%;
  height: 75%;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 1.3em;
  resize: none;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;
const Button = styled.button`
  width: 75px;
  height: 35px;
  font-family: Noto Sans KR;
  background: #121212;
  border-radious: 5px;
  color: white;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

const FeedBack = (): JSX.Element => {
  return (
    <FeedBackWrapper>
      <Wrapper>
        <Title>2022달력 피드백</Title>
        <Detail>
          앞으로 달력하면서 하고 싶은 것을 써주삼요 헛소리 써줘도 감사히 읽음▽
        </Detail>
        <TextInput />
        <ButtonWrapper>
          <Button>Send!</Button>
        </ButtonWrapper>
      </Wrapper>
    </FeedBackWrapper>
  );
};

export default FeedBack;
