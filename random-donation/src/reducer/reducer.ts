import { createAction, handleActions } from "redux-actions";
import firestore from "../services/fbase";

// action type
const USERS_LIST = "USERS_LIST";
const USER_SELECT = "USER_SELECT";

export const users_list = createAction(USERS_LIST);
export const user_select = createAction(USER_SELECT);

export const firebase_user_list = () => {
  return (dispatch: any) => {
    return firestore
      .collection("users")
      .get()
      .then((snapshot: any) => {
        var rows: any = [];
        snapshot.forEach((doc: any) => {
          var childData = doc.data();
          rows.push(childData);
        });
        dispatch(users_list(rows));
      });
  };
};

const initialState = {
  users: {},
  selectedUser: {},
};

export default handleActions(
  {
    [USERS_LIST]: (state: any, data: any) => {
      return { users: data, selectedUser: {} };
    },
    [USER_SELECT]: (state: any, name: any) => {
      let users = state.users;
      return {
        users: users,
        selectedUser: users.find((row: any) => row.name === name),
      };
    },
  },
  initialState
);
