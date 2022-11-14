const app = require("express")()
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
})
const cors = require('cors');
app.use(cors());

io.on("connection", (socket) => {
    // console.log(socket);

    socket.on("chat", (payload) => {
        console.log("payload", payload);
        io.emit("chat", payload)
    })
})

server.listen(5000, () => {
    console.log("server is listening at port 5000");
})