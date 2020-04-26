const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;
const middlewares = require("./middlewares/middlewares");

//middlewares
middlewares(app);

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is up and running on ${port} (PORT).`);
});
