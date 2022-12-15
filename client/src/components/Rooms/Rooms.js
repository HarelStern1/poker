import { useState, useEffect } from "react";
import RoomCard from "../RoomCard/RoomCard";
import { RoomsContainer } from "./Rooms.styled";
import { socket } from "../../socket/init";
import { useAppContext } from "../../context/AppContext";

const Rooms = () => {
  const { rooms, setRooms } = useAppContext();

  useEffect(() => {
    socket.emit("get_current_rooms_data");
    socket.on("recieve_current_rooms_data", (currentRooms) => {
      const roomsCopy = [...rooms];
      for (let i = 0; i < roomsCopy.length; i++) {
        roomsCopy[i].users = currentRooms[i + 1]?.users;
      }
      setRooms(roomsCopy);
    });

    socket.on("recieve_all_users_in_room", (allUsersInRoom, roomId) => {
      const id = parseInt(roomId);
      const roomsCopy = [...rooms];
      roomsCopy[id - 1].users = allUsersInRoom;
      setRooms(roomsCopy);
    });
  }, []);

  return (
    <RoomsContainer>
      {rooms.map((room, idx) => {
        return <RoomCard key={idx} room={room} />;
      })}
    </RoomsContainer>
  );
};

export default Rooms;
