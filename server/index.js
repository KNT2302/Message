const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:5000"]
  }
})

io.on("connection", (socket) => {
  socket.emit("hello", "hi")
  console.log(socket.id)
  socket.on("disconnect", (reason) => {
    console.log(reason)
  })

  socket.on("join", (room) => {
    socket.join(room)
    io.to(room).emit('joined', { isJoined: true })
  })
})
