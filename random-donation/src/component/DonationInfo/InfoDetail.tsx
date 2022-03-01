import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firebase_user_list } from "../../reducer/reducer";

const InfoDetail = (props: any) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    setUsers(props.dispatch(firebase_user_list()));

    console.log(users);
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

let mapStateToProps = (state: any) => {
  return {
    users: state.users,
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(InfoDetail);
