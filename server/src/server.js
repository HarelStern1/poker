import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import routes from "./routes.js";
import connectToDatabase from "./connection/connection.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

export const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

connectToDatabase();

// io.on("connection", onConnection);
