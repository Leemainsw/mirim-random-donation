import React, { useEffect, useState } from "react";
import UserData from "../../types/type";
import UserDataService from "../../services/service";

const InfoDetail = () => {
  const [users, setUsers] = useState(Array<UserData>());
  useEffect(() => {
    UserDataService.getAll().onSnapshot((items: any) => {
      let user = new Array<UserData>();
      items.forEach((item: any) => {
        let data = item.data();
        user.push({
          ...data,
        });
      });

      console.log(user);
      setUsers(user);
    });
  });
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default InfoDetail;
