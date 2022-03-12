import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import firestore from "../services/fbase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
`;

const TextBox2 = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 10px;

    @media only screen and (max-width: 360px) {
        font-size: 1.8rem;
    }
`;

const Load = (location: any): JSX.Element => {
    // const params = new URLSearchParams(window.location.search);
    // const name = params.get("name");

    const userData = useSelector((state: any) => state.userData) || {
        name: "aaa",
        detail: "bbb",
    };

    const [user, setUser] = useState();
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoad(true);

        if (!userData || Object.keys(userData).length === 0)
            return navigate("/");
        setLoad(false);

        setTimeout(() => {
            navigate("/result");
        }, 3000);
    }, []);

    return (
        <>
            {!load && (
                <Container>
                    <TextBox>
                        {userData.name}님이
                        <br />
                        <TextBox2>
                            내실 금액 <b>계산중</b>
                        </TextBox2>
                    </TextBox>

                    <ReactLoading type={"bubbles"} color="#fff" />
                </Container>
            )}
        </>
    );
};

export default Load;
