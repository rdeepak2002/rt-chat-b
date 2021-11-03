const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
    cors:{
        origin: "http://localhost:3000",
    }
});

const port = process.env.PORT || 8080;

io.on("connection", (socket) => {

    console.log( `${socket.id} connected`);

    socket.on("message_sent", message => {  
        io.emit("message_sent", message);
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected`);
    });


});

http.listen(port, () => {
    console.log (`server running at http://localhost:${port}/`);
});
