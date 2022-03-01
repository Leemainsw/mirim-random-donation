import React from "react";
import styled from "styled-components";

import { device } from "../../services/devices";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import firestore from "../../services/fbase";
import RankOption from "./RankOption";

const RankListWrapper = styled.div`
  width: 100%;
  height: 65%;
  background: #f6f6f6;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  padding: 30px 25px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  width: 100%;
`;
const Border = styled.div`
  width: 90%;
  height: 3px;
  background: #121212;
`;

const RankList = (props: any): JSX.Element => {
  const [userList, setUserList] = useState([]);

  // dispatch를 사용하기 위한 준비
  // const dispatch = useDispatch();
  // dispatch(firebase_user_rank_list());

  useEffect(() => {
    const getData = () => {
      firestore
        .collection("users")
        .where("isConfirm", "==", true)
        .orderBy("result", "desc")
        .limit(5)
        .get()
        .then((snapshot: any) => {
          var rows: any = [];

          snapshot.forEach((doc: any) => {
            var childData = doc.data();
            rows.push(childData);
          });

          setUserList(rows);
        });
    };

    // getData();
  }, []);

  const array = [
    { name: "양아름", price: 3000 },
    { name: "양아름", price: 3000 },
    { name: "양아름", price: 3000 },
    { name: "양아름", price: 3000 },
    { name: "양아름", price: 3000 },
  ];

  return (
    <RankListWrapper>
      <Wrapper>
        <TitleWrapper>
          <Title>도네이션 랭킹!</Title>
          <Border />
        </TitleWrapper>

        {array &&
          array.map((data: any, index: number) => (
            <RankOption name={data.name} price={data.price} index={index} />
          ))}
      </Wrapper>
    </RankListWrapper>
  );
};

let mapStateToProps = (state: any) => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(RankList);
