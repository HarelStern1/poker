import Lobby from "../../components/Lobby/Lobby";
import Sidebar from "../../components/Sidebar/Sidebar";
import useAuth from "../../hooks/useAuth";
import NotAutherized from "../NotAutherized/NotAutherized";
import { Wrapper } from "./Dashboard.styled";

const Dashboard = () => {
  const { authenticated, user, loading } = useAuth();

  if (!authenticated && !loading) {
    return <NotAutherized />;
  }

  return (
    <Wrapper>
      <Sidebar user={user} />
      <Lobby user={user} />
    </Wrapper>
  );
};

export default Dashboard;
