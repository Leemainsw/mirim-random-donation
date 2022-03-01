import React from "react";
import styled from "styled-components";
import { device } from '../../services/devices';

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

const FeedBack = (): JSX.Element => {
    return (
        <BottomBox>
            <TextBox>
                <Text
                    fontSize={"1.8rem"}
                    fontWeight={"900"}
                    fontColor={"#121212"}
                >
                    2022 달력 피드백
                </Text>
                <Text
                    fontSize={"1.2rem"}
                    fontWeight={"normal"}
                    fontColor={"#121212"}
                >
                    앞으로 달력하면서 하고 싶은 것을 써주삼요 헛소리 써줘도
                    감사히 읽음
                </Text>
            </TextBox>
            <Form autoFocus={true}></Form>
            <Button>Send!</Button>
        </BottomBox>
    );
};

export default FeedBack;
