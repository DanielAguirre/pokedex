'use strict'

const env = process.env.NODE_ENV || 'development'
const http = require('http')
const expressServer = require('./expressServer')
const app = new expressServer()
const server = http.createServer(app.expressServer)

GLOBAL.config = require('./config')[env]

function onListening () {  
  console.log(`Server running in port ${config.port}`)
}

if(!module.parent){
  server.on('listening', onListening)
  server.listen(config.port)
} else {
  module.export = server
}
