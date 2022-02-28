import React from "react";
import styled from "styled-components";

import { device } from '../../services/devices';

interface FontProp {
    fontSize: string;
    fontWeight: string;
    fontColor: string;
    marginTop?: string | null;
    padding: string;
    paddingLeft?: string;
}

const Container = styled.div`
    position: relative;

    width: 100%;
    height: 75%;
    background: #f6f6f6;
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
    justify-content: space-around;

    @media ${device.mobileL} {
        height: 80%;
    }

`;

const Text = styled.p`
    font-size: ${(props: FontProp) => props.fontSize};
    font-weight: ${(props: FontProp) => props.fontWeight};
    padding: ${(props: FontProp) => props.padding};
    margin-top: ${(props: FontProp) => props.marginTop};
    color: ${(props: FontProp) => props.fontColor};
    padding-left: ${(props: FontProp) => props.paddingLeft};

    
    @media ${device.mobileL || device.tablet} {
        font-size: calc(${(props: FontProp) => props.fontSize} / 2 + 5px);
    }
`;

const RankList = (): JSX.Element => {
    const array = [
        { name: "양아름", price: 3000 },
        { name: "양아름", price: 3000 },
        { name: "양아름", price: 3000 },
        { name: "양아름", price: 3000 },
        { name: "양아름", price: 3000 },
    ];
    return (
        <Container>
            <Text fontSize={"1.7rem"} fontWeight={"900"} fontColor={"#121212"} padding={'20px'} paddingLeft={'25px'}>
                도네이션 랭킹!
            </Text>

            {array.map((data: any, index: number) => (
                <Text key={index} fontSize={"1.2rem"} fontWeight={"500"} fontColor={"#121212"} padding={'5px'} paddingLeft={'25px'}>
                {index + 1}위 {data.name}
                </Text>
            ))}
        </Container>
    );
};

export default RankList;
