import React from "react";
import styled from "styled-components";
import { device } from "../../services/devices";
import imageSrc from "../../assets/image.png";
import { useSelector } from "react-redux";

interface FontProp {
    fontSize?: string;
    fontWeight?: string;
    fontColor?: string;
    margin?: string;
}

const ResultTextWrapper = styled.div`
    width: 63%;
    height: 100%;
    background: #121212;
    border-radius: 5px;
`;
const Wrapper = styled.div`
    padding: 50px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;
const TopWrapper = styled.div`
    height: 80%;
`;
const BottomWrapper = styled.div`
    height: 20%;
    display: flex;
    flex-direction: column-reverse;
`;

const WhiteText = styled.div`
    color: white;
    font-size: ${(props: FontProp) => props.fontSize};
    font-weight: ${(props: FontProp) => props.fontWeight};
    margin: ${(props: FontProp) => (props.margin ? props.margin : "3px")};
`;
const MoneyText = styled.div`
    color: #deddb6;
    font-size: 5em;
    font-weight: bold;
    margin: 6px 0px 40px 0px;
`;
const BoldText = styled.b`
    font-weight: bold;
`;
const CopyBox = styled.div`
    cursor: pointer;
    display: flex;
`;
const CopyImg = styled.img`
    margin: 3px;
`;

const ResultText = (): JSX.Element => {
    const name = useSelector((state: any) => state.name);
    const detail = "개발자";

    const money: number = 30000;
    const count: number = 1;
    const copyBankAccount = () => {
        var content: string = "국민은행 42400201291764 이의진";

        navigator.clipboard.writeText(content).then(() => {
            alert("복사되었습니다! 수고비 감사합니다~");
        });
    };

    const array = [
        { price: 30000, userId: "" },
        { price: 7000, userId: "" },
        { price: 7000, userId: "" },
        { price: 7000, userId: "" },
        { price: 7000, userId: "" },
        { price: 6000, userId: "" },
        { price: 6000, userId: "" },
        { price: 6000, userId: "" },
        { price: 6000, userId: "" },
        { price: 5000, userId: "" },
        { price: 5000, userId: "" },
        { price: 5000, userId: "" },
        { price: 5000, userId: "" },
        { price: 1000, userId: "" },
    ];

    // 아직 매칭되지 않은 가격 array를 랜덤으로 섞어 그 첫 번째 값
    const price = array
        .filter((ele) => !ele.userId || ele.userId.length === 0)
        .sort(() => Math.random() - 0.5)[0];

    return (
        <ResultTextWrapper>
            <Wrapper>
                <TopWrapper>
                    <WhiteText fontSize={"1.1em"}>{detail}</WhiteText>
                    <WhiteText fontSize={"1.6em"} fontWeight={"600"}>
                        {name}의 수고비
                    </WhiteText>
                    <MoneyText>{price.price.toLocaleString('ko-KR')}원</MoneyText>
                    <WhiteText fontWeight={"100"}>
                        달력 발주 비용 : 8,900원 X 수량 ({count})
                    </WhiteText>
                    <WhiteText fontWeight={"100"}>
                        랜덤 수고비 : {price.price.toLocaleString('ko-KR')}원
                    </WhiteText>

                    <WhiteText
                        fontSize={"1.3em"}
                        fontWeight={"300"}
                        margin={"5px 0px"}
                    >
                        총 입금 금액:{" "}
                        <BoldText>{(price.price + 8900 * count).toLocaleString('ko-KR')}원</BoldText>
                    </WhiteText>
                </TopWrapper>
                <BottomWrapper>
                    <WhiteText fontWeight={"100"}>
                        카카오뱅크도 가능합니다.
                    </WhiteText>
                    <CopyBox >
                        <WhiteText fontWeight={"100"}>
                            국민은행 42400201291764 이의진
                        </WhiteText>
                        <CopyImg src={imageSrc} onClick={copyBankAccount}/>
                    </CopyBox>
                </BottomWrapper>
            </Wrapper>
        </ResultTextWrapper>
    );
};

export default ResultText;
