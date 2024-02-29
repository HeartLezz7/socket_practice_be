const server = require("./app");
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST"],
  },
});

const onlineUser = {};

io.use((socket, next) => {
  const userId = socket.handshake.auth.id;
  onlineUser[userId] = socket.id;
  next();
});

io.on("connection", (socket) => {
  console.log("chat server online");
  socket.on("message", (msg) => {
    io.emit("recieved", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen("8888", () => console.log("This server run on port: 8888"));
