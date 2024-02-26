const server = require("./app");
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST"],
  },
});

// const onlineUser = {};

// io.use((socket, next) => {});

io.on("connection", (socket) => {
  console.log(socket);
  socket.on("message", (msg) => {
    console.log(msg);
    io.emit("recieved", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen("8888", () => console.log("This server run on port: 8888"));
