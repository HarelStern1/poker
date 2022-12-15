import { io } from "../server.js";

const onConnection = (socket) => {
  console.log("New connection with id: " + socket.id);

  socket.on("disconnect", async () => {
    const allUsersInRoom1 = await io.in("1").fetchSockets();
    const allUsersNicknames1 = allUsersInRoom1.map((socket) => socket.nickname);

    const allUsersInRoom2 = await io.in("2").fetchSockets();
    const allUsersNicknames2 = allUsersInRoom2.map((socket) => socket.nickname);

    const allUsersInRoom3 = await io.in("3").fetchSockets();
    const allUsersNicknames3 = allUsersInRoom3.map((socket) => socket.nickname);

    const rooms = {
      1: {
        users: allUsersNicknames1,
      },
      2: {
        users: allUsersNicknames2,
      },
      3: {
        users: allUsersNicknames3,
      },
    };

    io.emit("recieve_current_rooms_data", rooms);
  });

  socket.on("join_room", async (roomId) => {
    socket.join(roomId);
    const allUsersInRoom = await io.in(roomId).fetchSockets();
    const allUsersNicknames = allUsersInRoom.map((socket) => socket.nickname);
    io.emit("recieve_all_users_in_room", allUsersNicknames, roomId);
  });

  socket.on("get_current_rooms_data", async () => {
    const allUsersInRoom1 = await io.in("1").fetchSockets();
    const allUsersNicknames1 = allUsersInRoom1.map((socket) => socket.nickname);

    const allUsersInRoom2 = await io.in("2").fetchSockets();
    const allUsersNicknames2 = allUsersInRoom2.map((socket) => socket.nickname);

    const allUsersInRoom3 = await io.in("3").fetchSockets();
    const allUsersNicknames3 = allUsersInRoom3.map((socket) => socket.nickname);

    const rooms = {
      1: {
        users: allUsersNicknames1,
      },
      2: {
        users: allUsersNicknames2,
      },
      3: {
        users: allUsersNicknames3,
      },
    };

    io.emit("recieve_current_rooms_data", rooms);
  });

  socket.on("send_nickname", (nickname) => {
    socket.nickname = nickname;
  });

  socket.on("get_all_users_in_room", async (roomId) => {
    const allUsersInRoom = await io.in(roomId).fetchSockets();
    const allUsersObjects = allUsersInRoom.map((socket) => {
      return {
        name: socket.nickname,
        hand: [],
      };
    });
    io.emit("recieve_all_users_in_room", allUsersObjects, roomId);
  });

  socket.on("send_initial_hands", (initialHands, roomId) => {
    io.in(roomId).emit("recieve_initial_hands", initialHands);
  });
};

export default onConnection;
