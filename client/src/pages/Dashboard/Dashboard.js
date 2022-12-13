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
      <div>hello</div>
      <div>world</div>
    </Wrapper>
  );
};

export default Dashboard;
