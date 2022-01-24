require('dotenv').config()
const port = process.env.PORT || 3001
const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer(app).listen(port, () => console.log(`server running on port ${port}`))

const listener = require('socket.io')(server)
listener.on('connection', (socket) => {
  console.log('socket connected . . .')
})

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))