import Text from "../Text/Text";
import { DividerWrapper, Line, Wrapper } from "./Lobby.styled";
import { colors } from "../../utils/constants";
import Rooms from "../Rooms/Rooms";

const Lobby = ({ user }) => {
  return (
    <Wrapper>
      <Text size="35px" color={colors.white}>
        Welcome, {user.name}
      </Text>
      <DividerWrapper>
        <Text size="25px">Join Now</Text>
        <Line />
      </DividerWrapper>
      <Rooms />
      <DividerWrapper>
        <Text size="25px">Private Game</Text>
        <Line />
      </DividerWrapper>
    </Wrapper>
  );
};

export default Lobby;
