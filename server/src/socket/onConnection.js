import { io } from "../server.js";

const onConnection = (socket) => {
  console.log("New connection with id: " + socket.id);

  socket.on("disconnect", () => {
    let room1 = io.of("/").adapter.rooms.get("1");
    let room2 = io.of("/").adapter.rooms.get("2");
    let room3 = io.of("/").adapter.rooms.get("3");

    const rooms = {
      1: {
        users: room1?.size > 0 ? [...room1] : [],
      },
      2: {
        users: room2?.size > 0 ? [...room2] : [],
      },
      3: {
        users: room3?.size > 0 ? [...room3] : [],
      },
    };

    io.emit("recieve_current_rooms_data", rooms);
  });

  socket.on("join_room", async (roomId) => {
    socket.join(roomId);
    const allUsersInRoom = await io.in(roomId).fetchSockets();
    const allUsersIdsInRoom = allUsersInRoom.map((socket) => socket.id);
    io.emit("recieve_all_users_in_room", allUsersIdsInRoom, roomId);
  });

  socket.on("get_current_rooms_data", () => {
    let room1 = io.of("/").adapter.rooms.get("1");
    let room2 = io.of("/").adapter.rooms.get("2");
    let room3 = io.of("/").adapter.rooms.get("3");

    const rooms = {
      1: {
        users: room1?.size > 0 ? [...room1] : [],
      },
      2: {
        users: room2?.size > 0 ? [...room2] : [],
      },
      3: {
        users: room3?.size > 0 ? [...room3] : [],
      },
    };

    io.emit("recieve_current_rooms_data", rooms);
  });
};

export default onConnection;
