import Text from "../Text/Text";
import { CardWrapper, PlayersCount } from "./RoomCard.styled";
import { FiUsers } from "react-icons/fi";
import { socket } from "../../socket/init";

const RoomCard = ({ room }) => {
  const joinRoom = (roomId) => {
    socket.emit("join_room", roomId);
  };

  return (
    <CardWrapper onClick={() => joinRoom(room.id)}>
      <Text>{room.name}</Text>
      <Text size="18px" margin="10px 0 0 ">
        {room.limit.smallBlind} / {room.limit.bigBlind}
      </Text>
      <PlayersCount>
        {room.users.length}
        <FiUsers />
      </PlayersCount>
    </CardWrapper>
  );
};

export default RoomCard;
