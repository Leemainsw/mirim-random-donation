import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../services/devices';
import imageSrc from '../../assets/copy.svg';
import { useSelector } from 'react-redux';
import firestore from '../../services/fbase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FontProp {
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  margin?: string;
}
interface price {
  price: number;
  userId: string;
  id?: string;
}

const ResultTextWrapper = styled.div`
  width: 63%;
  height: 100%;
  background: #121212;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 100%;
    height: 600px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    padding: 40px;
    font-size: 13px;
  }
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
  margin: ${(props: FontProp) => (props.margin ? props.margin : '3px 0px')};
`;
const MoneyText = styled.div`
  color: #deddb6;
  font-size: 5em;
  font-weight: bold;
  margin: 6px 0px 40px 0px;

  @media ${device.tablet} {
    font-size: 4.6em;
  }
`;
const BoldText = styled.b`
  font-weight: bold;
`;
const CopyBox = styled.div`
  cursor: pointer;
  display: flex;
`;
const CopyImg = styled.img`
  margin: 2px;
  width: 20px;
  height: 18px;
  @media ${device.tablet} {
    height: 17px;
  }
`;

const ResultText = (): JSX.Element => {
  const [priceArray, setPriceArray] = useState<any[]>([]);
  const [price, setPrice] = useState({ price: 0, userId: '' });
  const userData = useSelector((state: any) => state.userData);

  const name = userData.name;
  const detail = userData.detail;
  const count = userData.count;

  useEffect(() => {
    const getData = async (): Promise<void | boolean> => {
      if (userData.isConfirm) return false;

      const snapshot = await firestore.collection('master').get();
      let priceArray: any = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPriceArray(priceArray ? priceArray : []);
    };

    getData();
  }, []);

  useEffect(() => {
    if (userData.isConfirm) {
      const getData = async (): Promise<void> => {
        const snapshot = await firestore
          .collection('master')
          .where('userId', '==', userData.id)
          .get();
        let priceArray: any = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPrice(priceArray[0]);
      };

      getData();
    } else {
      const updateData = (price: number, priceId: string) => {
        const userId = userData.id;

        firestore.collection('master').doc(priceId).update({
          userId: userId,
        });

        firestore.collection('users').doc(userId).update({
          isConfirm: true,
          result: price,
        });
      };

      const setData = (): void | boolean => {
        if (priceArray.length === 0) return false;
        if (price && price.price) return false;

        let data = priceArray
          .filter((ele: price) => !ele.userId || ele.userId.length === 0)
          .sort(() => Math.random() - 0.5)[0];

        setPrice(data);
        updateData(data.price, data.id);
      };

      setData();
    }
  }, [priceArray, price]);

  const copyBankAccount = () => {
    var content: string = '국민은행 42400201291764 이의진';

    var tempElem = document.createElement('textarea');
    tempElem.value = content;
    document.body.appendChild(tempElem);
    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);

    toast.success('🦄 복사완료 수고비 감사합니다~', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <ResultTextWrapper>
      <Wrapper>
        <TopWrapper>
          <WhiteText fontSize={'1.1em'}>{detail}</WhiteText>
          <WhiteText fontSize={'1.6em'} fontWeight={'600'}>
            {name}의 수고비
          </WhiteText>
          <MoneyText>{price.price.toLocaleString('ko-KR')}원</MoneyText>
          <WhiteText fontWeight={'100'}>
            달력 발주 비용 : 8,900원 X 수량 ({count})
          </WhiteText>
          <WhiteText fontWeight={'100'}>
            랜덤 수고비 : {price.price.toLocaleString('ko-KR')}원
          </WhiteText>

          <WhiteText fontSize={'1.3em'} fontWeight={'300'} margin={'5px 0px'}>
            총 입금 금액:{' '}
            <BoldText>
              {(price.price + 8900 * count).toLocaleString('ko-KR')}원
            </BoldText>
          </WhiteText>
        </TopWrapper>
        <BottomWrapper>
          <WhiteText fontWeight={'100'}>카카오뱅크도 가능합니다.</WhiteText>
          <CopyBox>
            <WhiteText fontWeight={'100'}>
              국민은행 42400201291764 이의진
            </WhiteText>
            <CopyImg
              src={imageSrc}
              alt="계좌번호 복사"
              onClick={copyBankAccount}
              id="copyBtn"
            />
          </CopyBox>
        </BottomWrapper>
      </Wrapper>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ResultTextWrapper>
  );
};

export default ResultText;
