const http = require('http')

const websocket = require('ws')

const server = http.createServer((req, res) => {
  res.end('I am connected')
})

const wss = new websocket.WebSocketServer({server})

wss.on('headers', (headers, req)=>{
  console.log(headers)
})

wss.on('connection', (ws, req)=>{
  console.log(ws)
  ws.send('Welcome to the server')
  ws.on('message', (data)=>{
    console.log(data)
    console.log(data.toString())
  })
})

server.listen(8000)