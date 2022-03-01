import React from "react";
import styled from "styled-components";
import { device } from "../../services/devices";

interface FontProp {
  fontSize: string;
  fontWeight: string;
  fontColor: string;
  marginTop?: string | null;
  padding?: string;
  paddingLeft?: string;
}

const BottomBox = styled.div`
  position: relative;
  width: 65%;
  height: 45vh;
  background: #f6f6f6;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-top: 1.2rem;
  font-family: Noto Sans KR;

  @media ${device.tablet} {
    height: 25vh;
    margin-top: 0;
    margin-bottom: 50px;
  }
`;

const Text = styled.p`
  font-size: ${(props: FontProp) => props.fontSize};
  font-weight: ${(props: FontProp) => props.fontWeight};
  color: ${(props: FontProp) => props.fontColor};

  @media ${device.mobileL || device.tablet} {
    font-size: calc(${(props: FontProp) => props.fontSize} / 2 + 5px);
  }

  padding: 5px;
`;

const TextBox = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;

const Form = styled.textarea`
  width: 80%;
  height: 100px;

  margin-top: 20px;
  margin-left: 32px;
  background-color: transparent;
  border: none;
  outline: none;

  font-size: 1.2rem;
  font-family: Noto Sans KR;

  @media ${device.desktop} {
    height: 75%;
  }

  @media ${device.tablet} {
    width: 75%;
    height: 30%;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  background: #121212;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  border-radius: 3px;

  padding: 0.5rem;
`;

const FeedBackWrapper = styled.div`
  width: 100%;
  height: 48%;
  background: #5485;
`;

const FeedBack = (): JSX.Element => {
  return <FeedBackWrapper>sadkfj</FeedBackWrapper>;
};

export default FeedBack;
