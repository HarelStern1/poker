import { useEffect, useState } from "react";
import { TableWrapper } from "./Table.styled";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { colors } from "../../utils/constants";
import Deck from "../../classes/Deck";
import { socket } from "../../socket/init";
import Users from "../Users/Users";
import Hands from "../Hand/Hand";
import { useAppContext } from "../../context/AppContext";

const Table = ({ roomId }) => {
  const { rooms, setRooms } = useAppContext();

  const handleStartGame = () => {
    const deck = new Deck();
    deck.shuffle();

    const hands = deck.initialDeal(rooms[roomId - 1].users);
    socket.emit("send_initial_hands", hands, roomId);
  };

  // set initial hands
  useEffect(() => {
    socket.on("recieve_initial_hands", (initialHands) => {
      const roomsCopy = [...rooms];
      roomsCopy[roomId - 1].users = initialHands;
      setRooms(roomsCopy);
    });
  }, []);

  const atLeastTwoUsers = (roomId) => {
    return rooms[roomId - 1].users.length > 1;
  };

  return (
    <TableWrapper>
      <Users roomId={roomId} />
      {atLeastTwoUsers(roomId) && (
        <Button round backgroundColor={colors.gray} onClick={handleStartGame}>
          Start Game
        </Button>
      )}
    </TableWrapper>
  );
};

export default Table;
