'use strict'

const env = proccess.env.NODE_ENV || 'development'
const http = require('http')
const expressServer = require('./expressServer')
const app = new expressServer()
const server = http.creteServer(app.expressServer)

function onListening () {
  console.log(`Server running in port $[config.port]`)
}

if(!module.parent){
  serer.on('Listening', onListening)
  server.listen(config.port)
} else {
  module.export = server
}
