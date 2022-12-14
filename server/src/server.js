import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import routes from "./routes.js";
import connectToDatabase from "./connection/connection.js";
import onConnection from "./socket/onConnection.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

export const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io", "http://localhost:3000"],
    credentials: true,
  },
});

connectToDatabase();

io.on("connection", onConnection);
