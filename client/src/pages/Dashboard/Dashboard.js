import Lobby from "../../components/Lobby/Lobby";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Wrapper } from "./Dashboard.styled";

const Dashboard = ({ user }) => {
  return (
    <Wrapper>
      <Sidebar user={user} />
      <Lobby user={user} />
    </Wrapper>
  );
};

export default Dashboard;
