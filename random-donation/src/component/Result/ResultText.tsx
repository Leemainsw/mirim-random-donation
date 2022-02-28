import React from "react";
import styled from "styled-components";
import { device } from '../../services/devices';

interface FontProp {
    fontSize: string;
    fontWeight: string;
    fontColor: string;
    marginTop?: string | null;
}

interface BoxProp {
    padding: string;
}

const Container = styled.div`
    position: relative;

    width: 60%;
    height: 100%;
    background: #121212;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    color: #ffffff;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    @media ${device.tablet} {
        width: 80%;
        height: 30vh;   
    }
`;

const ICON = styled.div`
    position: absolute;
    bottom: -20px;
    right: 20px;
`;

const Text = styled.p`
    font-size: ${(props: FontProp) => props.fontSize};
    font-weight: ${(props: FontProp) => props.fontWeight};
    padding: 5px;
    margin-top: ${(props: FontProp) => props.marginTop};
    color: ${(props: FontProp) => props.fontColor};
`;

const Box = styled.div`
    padding: ${(props: BoxProp) => props.padding};
`;

const Icon2 = styled.img``;

const Icon = (): JSX.Element => {
    return (
        <ICON>
            <svg
                width="126"
                height="72"
                viewBox="0 0 126 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M124 20C124 21.8431 122.821 23.9542 119.849 26.1853C116.911 28.3904 112.532 30.4613 106.943 32.2359C95.7861 35.7776 80.2498 38 63 38C45.7502 38 30.2139 35.7776 19.0574 32.2359C13.4676 30.4613 9.08938 28.3904 6.15143 26.1853C3.17878 23.9542 2 21.8431 2 20C2 18.1569 3.17878 16.0458 6.15143 13.8147C9.08938 11.6096 13.4676 9.53865 19.0574 7.76411C30.2139 4.22239 45.7502 2 63 2C80.2498 2 95.7861 4.22239 106.943 7.76411C112.532 9.53865 116.911 11.6096 119.849 13.8147C122.821 16.0458 124 18.1569 124 20Z"
                    stroke="white"
                    strokeWidth="4"
                />
                <path
                    d="M124 50C124 61.0457 96.6894 70 63 70C29.3106 70 2 61.0457 2 50"
                    stroke="white"
                    strokeWidth="4"
                />
                <line
                    x1="2"
                    y1="20"
                    x2="2"
                    y2="51"
                    stroke="white"
                    strokeWidth="4"
                />
                <line
                    x1="124"
                    y1="20"
                    x2="124"
                    y2="51"
                    stroke="white"
                    strokeWidth="4"
                />
            </svg>
        </ICON>
    );
};

const ResultText = (): JSX.Element => {
    return (
        <Container>
            <Box padding={"30px"}>
                <Text
                    fontSize={"1.2rem"}
                    fontWeight={"700"}
                    fontColor={"#ffffff"}
                >
                    개발자 양아름의 수고비 :{" "}
                </Text>
                <Text
                    fontSize={"2.5rem"}
                    fontWeight={"900"}
                    fontColor={"#DEDDB6"}
                >
                    30,000원
                </Text>

                <Text
                    fontSize={"1rem"}
                    fontWeight={"400"}
                    fontColor={"#ffffff"}
                    marginTop={"20px"}
                >
                    {" "}
                    달력 발주 비용 : 8,900원 X 수량 (1)
                    <br />
                    랜덤 수고비 : 30,000원
                    <br />
                    총 입금 금액 : 38,900원
                    <br />
                </Text>
            </Box>

            <Box padding={"30px"}>
                <Text
                    fontSize={"0.8rem"}
                    fontWeight={"300"}
                    fontColor={"#ffffff"}
                >
                    국민은행 42400201291764 이의진{" "}
                    <Icon2 src={"../../assets/image.png"} />
                </Text>
            </Box>
            <Icon />
        </Container>
    );
};

export default ResultText;
