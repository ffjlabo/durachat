const path = require('path')
const express = require('express')
const http = require('http')

const app = express()
const server = http.Server(app)
const io = require('socket.io')(server)
const port = 3000

// get
app.get('/client.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.js'));
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

server.listen(port)
console.log(`listen on http://localhost:${port}`)

// socket.io
io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', (val) => {
        console.log('disconnected')
    })

    // receive message from user
    socket.on('submit', (val) => {
        io.emit('add', val)
    })
})

