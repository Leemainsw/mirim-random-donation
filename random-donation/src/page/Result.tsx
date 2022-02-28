import React from "react";
import styled from "styled-components";
import FeedBack from "../component/Result/FeedBack";
import RankList from "../component/Result/RankList";
import ResultText from "../component/Result/ResultText";

import { device } from '../services/devices';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
    }

    @media ${device.mobileL} {
        background-color: blue;
        height: 100vh;
    }

    @media ${device.mobileM} {
        background-color: purple;
    }

    @media ${device.mobileS} {
        background-color: gray;
    }
`;

const TopBox = styled.div`
    width: 65%;
    height: 50vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${device.tablet} {
        width: 80%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`

const RightBox = styled.div`
    width: 38%;
    height: 100%;   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    @media ${device.tablet} {
        width: 80%;
        height: 45%;
    }
`

const Box = styled.div`
    width: 100%;
    height: 22%;
    background: #C4C4C4;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    

    @media ${device.mobileL} {
        height: 15%;
    }
`

const Result = (): JSX.Element => {
    return (
        <Container>
            <TopBox>
                <ResultText/>
                <RightBox>
                    <RankList/>
                    <Box></Box>
                </RightBox>
            </TopBox>
            <FeedBack/>
        </Container>
    );
};

export default Result;
