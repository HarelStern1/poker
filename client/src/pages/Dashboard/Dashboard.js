import { useEffect } from "react";
import Lobby from "../../components/Lobby/Lobby";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Wrapper } from "./Dashboard.styled";
import { socket } from "../../socket/init";

const Dashboard = ({ user }) => {
  useEffect(() => {
    socket.emit("send_nickname", user.name);
  }, []);

  return (
    <Wrapper>
      <Sidebar user={user} />
      <Lobby user={user} />
    </Wrapper>
  );
};

export default Dashboard;
