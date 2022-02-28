import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #121212;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;

    @media only screen and (max-width: 360px) {
        font-size: 1.6rem;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

const TextBox2 = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 10px;

    @media only screen and (max-width: 360px) {
        font-size: 1.8rem;
    }
    
`

const Load = (): JSX.Element => {
    const name: string = "양아름"
    const detail: string = "개발자"

    return (
        <Container>
            <TextBox>
                {detail} {name}님이<br/>
                <TextBox2>내실 금액 <b>계산중</b></TextBox2>
            </TextBox>

            <ReactLoading type={"bubbles"} color="#fff" />
        </Container>
    );
};

export default Load;
