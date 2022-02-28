import firebase from "./fbase";
import UserData from "../types/type";

const db = firebase.collection("/users");

class UserDataService {
  getAll() {
    return db;
  }

  create(user: UserData) {
    return db.add(user);
  }

  update(id: string, value: any) {
    return db.doc(id).update(value);
  }

  delete(id: string) {
    return db.doc(id).delete();
  }
}

export default new UserDataService();
