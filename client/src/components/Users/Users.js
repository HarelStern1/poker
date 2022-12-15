import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import UserBox from "../UserBox/UserBox";

const Users = ({ roomId }) => {
  const { rooms } = useAppContext();

  return rooms[roomId - 1].users.map((user, idx) => {
    return <UserBox key={idx} user={user} />;
  });
};

export default Users;
