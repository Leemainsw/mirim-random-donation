import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import TeacherGift from "../../assets/Teacher_Gift.jpg";

import { device, min_device } from "../../services/devices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../reducer/reducer";
import firestore from "../../services/fbase";

import { ToastContainer, toast } from "react-toastify";

const InfoDetailWrapper = styled.div`
    width: 45%;
    height: 100%;
    background: #ffffff;

    @media ${device.tablet} {
        width: 100%;
    }
`;
const DetailWrapper = styled.div`
    width: 85%;
    margin: 50px auto;

    @media ${min_device.tablet} {
        height: 90%;
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    @media ${device.tablet} {
        overflow-y: hidden;
    }
`;
const Border = styled.div`
    width: 100%;
    height: 30px;
`;

const TitleWord = styled.h1`
    color: #131313;
    font-size: 1.8em;
    font-weight: bold;
`;
const DetailWordWrapper = styled.div`
    width: 90%;
    margin: 16px auto;
`;
const DetailWord = styled.div`
    color: #131313;
    font-size: 1em;
    margin: 7px 0px;
`;
const Image = styled.img`
    width: 100%;
    margin: 5px 0px 20px 0px;
`;
const BoldWord = styled.b`
    font-weight: bold;
`;
const InputName = styled.input`
    border: 0px;
    outline: 0px;
    background: #f9f9f9;
    padding-left: 10px;
    height: 35px;
    width: 300px;
    margin: 10px 0px;

    @media ${device.tablet} {
        font-size: 0.9em;
        width: 100%;
    }
`;
const GoButton = styled.button`
    border: 0px;
    outline: 0px;
    width: 300px;
    height: 35px;
    background: #121212;
    color: white;
    border-radius: 3px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    @media ${device.tablet} {
        font-size: 0.9em;
        width: 100%;
    }
`;

const InfoDetail = (props: any) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserData = (name: string): void | boolean => {
        firestore
            .collection("users")
            .where("name", "==", name)
            .get()
            .then((snapshot: any) => {
                if (snapshot.empty) {
                    toast.error("미쳤냐? 이름 똑바로 쓰랬지😨", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    return false;
                }

                snapshot.forEach((doc: any) => {
                    var childData = doc.data();

                    if (childData.isAdmin) {
                        toast.error("에잉 관리자는 못해영 ~ 😊", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                        return false;
                    }

                    dispatch(setUserData({ ...childData, id: doc.id }));
                    navigate("/load");
                });
            });
    };

    const goLoading = () => {
        getUserData(name);
    };

    return (
        <InfoDetailWrapper>
            <DetailWrapper>
                <TitleWord>정산방법</TitleWord>
                <DetailWordWrapper>
                    <DetailWord>1. 달력은 개당 8900원이다.</DetailWord>
                    <DetailWord>
                        2. 8900원에 너가 산 달력 개수를 곱한다.
                    </DetailWord>
                    <DetailWord>
                        3. 거기에 선생님들 달력 값 1900원을 더한다.
                    </DetailWord>
                    <DetailWord>
                        4. 거기에 랜덤으로 정해진 수고비를 더한다.
                    </DetailWord>
                    <DetailWord>5. 끝!</DetailWord>
                </DetailWordWrapper>

                <Border />

                <TitleWord>도네이션 확률</TitleWord>
                <DetailWordWrapper>
                    <DetailWord>3만원 : 1명</DetailWord>
                    <DetailWord>7천원 : 4명</DetailWord>
                    <DetailWord>6천원 : 4명</DetailWord>
                    <DetailWord>5천원 : 4명</DetailWord>
                    <DetailWord>천원 : 1명</DetailWord>
                </DetailWordWrapper>

                <Border />

                <TitleWord>알아두면 좋은 정보</TitleWord>
                <DetailWordWrapper>
                    <DetailWord>
                        - 3만원 도네이션 당첨되면 애장품 증정 받을 수 있는
                        영광이 주어짐.
                    </DetailWord>
                    <DetailWord>
                        - 3만원 도네이션 당첨되면 추가 식사권 증정.
                    </DetailWord>
                    <DetailWord>
                        - 다른 사람 사칭한 거 들키면 벌칙 있습니다.
                    </DetailWord>
                    <DetailWord>- 수고비 더 주고싶으면 더 줘도 됨.</DetailWord>
                </DetailWordWrapper>

                <Border />

                <TitleWord>FAQ</TitleWord>
                <DetailWordWrapper>
                    <DetailWord>Q. 선생님들 달력은 잘 드렸나요?</DetailWord>
                    <DetailWord>
                        A. 예. 박성래 선생님이 잘 받았다고 하셨습니다.
                    </DetailWord>
                    <Image src={TeacherGift} />
                    <DetailWord>
                        Q. 도네이션 금액은 어떻게 정하는 건가요?
                    </DetailWord>
                    <DetailWord>
                        A. 밑에 체크박스에{" "}
                        <BoldWord>이름을 적으면 달력의 요정</BoldWord>이 도네
                        금액을 정해줄 것임요.
                    </DetailWord>
                </DetailWordWrapper>

                <Border />

                <TitleWord>수고비 보러가기</TitleWord>
                <DetailWordWrapper>
                    <InputName
                        type="text"
                        placeholder="이름 세글자 써주라 이상한 거 쓰지마라 진짜"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <GoButton onClick={goLoading}>
                        달력의 요정아! 도와줘!
                    </GoButton>
                </DetailWordWrapper>
            </DetailWrapper>
            <Border />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </InfoDetailWrapper>
    );
};

let mapStateToProps = (state: any) => {
    return {
        users: state.users,
        selectedUser: state.selectedUser,
    };
};

export default connect(mapStateToProps)(InfoDetail);
