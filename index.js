const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is up and running on ${port} (PORT).`);
});
