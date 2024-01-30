// creating a web socket server
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer((req, res) => {
  console.log(new Date() + "Recieved Request from" + req.url);
  res.writeHead(404);
  res.end();
});
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(8080, () => {
  console.log(new Date() + "Server is listening on port 8080");
});
