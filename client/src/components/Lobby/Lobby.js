import Text from "../Text/Text";
import { Wrapper } from "./Lobby.styled";
import { colors } from "../../utils/constants";
import Rooms from "../Rooms/Rooms";

const Lobby = ({ user }) => {
  return (
    <Wrapper>
      <Text size="30px" color={colors.black}>
        Welcome, {user.name}
      </Text>
      <Rooms />
    </Wrapper>
  );
};

export default Lobby;
