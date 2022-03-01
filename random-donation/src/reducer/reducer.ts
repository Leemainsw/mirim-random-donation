import { createAction, handleActions } from "redux-actions";
import firestore from "../services/fbase";
import UserData from "./types";

// action type
const USERS_LIST = "USERS_LIST";
const USER_SELECT = "USER_SELECT";
const USER_RANK_LIST = "USER_RANK_LIST"

export const user_rank_list = createAction(USER_RANK_LIST);
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

export const firebase_user_rank_list = () => {
    return (dispatch: any) => {
        return firestore
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

                dispatch(user_rank_list(rows));
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
        [USER_RANK_LIST]: (state: any, data: any)=> {
          return {users: data || data.filter((ele: UserData) => ele.isConfirm).slice(0, 5)}
        }
    },
    initialState
);
