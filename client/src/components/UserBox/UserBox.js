import Hand from "../Hand/Hand";
import Text from "../Text/Text";
import { UserBoxWrapper } from "./UserBox.styled";

const UserBox = ({ user }) => {
  console.log(user);
  return (
    <UserBoxWrapper>
      <Text>{user.name}</Text>
      <Hand hand={user.hand} />
    </UserBoxWrapper>
  );
};

export default UserBox;
