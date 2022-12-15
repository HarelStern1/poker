import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Table from "../../components/Table/Table";
import Text from "../../components/Text/Text";
import { useAppContext } from "../../context/AppContext";
import { socket } from "../../socket/init";

const Room = () => {
  const { id } = useParams();
  const { rooms, setRooms } = useAppContext();

  // updating rooms
  useEffect(() => {
    socket.emit("get_all_users_in_room", id);
    socket.on("recieve_all_users_in_room", (allUsersInRoom, roomId) => {
      const id = parseInt(roomId);
      const roomsCopy = [...rooms];
      roomsCopy[id - 1].users = allUsersInRoom;
      setRooms(roomsCopy);
    });
  }, []);

  return (
    <Section padding="9vmax 12vw" direction="column">
      <Text margin="0 0 60px 0">Room {id}</Text>
      <Table roomId={id} />
    </Section>
  );
};

export default Room;
