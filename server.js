/**
 * @fileoverview Main server app script
 * @author Alvin Lin (alvin@omgimanerd.tech)
 */

const PORT = 5000

// Dependencies.
const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.Server(app)

app.set('port', PORT)
app.set('view engine', 'pug')

// app.use('/favicon.ico', express.static(path.join(__dirname)))
app.use('/client', express.static(path.join(__dirname, '/client')))

app.use('/', (request, response) => {
  response.render('index')
})

// Starts the server.
server.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`STARTING SERVER ON PORT ${PORT}`)
  /* eslint-enable no-console */
})
