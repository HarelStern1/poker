import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:5001";

export const socket = io(SERVER_URL);

const socketInit = () => {
  socket.on("connect", () => {
    console.log("You connected with id " + socket.id);
  });
};

export default socketInit;
