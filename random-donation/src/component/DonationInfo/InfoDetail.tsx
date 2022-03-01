import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firebase_user_list } from "../../reducer/reducer";

const DetailWrapper = styled.div`
  width: 45%;
  height: 100%;
  background: #ffffff;
`;

const InfoDetail = (props: any) => {
  // const [users, setUsers] = useState();
  // useEffect(() => {
  //   setUsers(props.dispatch(firebase_user_list()));

  //   console.log(users);
  // }, []);
  return (
    <DetailWrapper>
      <h1>hello</h1>
    </DetailWrapper>
  );
};

let mapStateToProps = (state: any) => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(InfoDetail);
