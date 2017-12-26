/**
 * @fileoverview Main server app script
 * @author Alvin Lin (alvin@omgimanerd.tech)
 */

const PORT = 5000

const PAGES = ['home', 'about', 'programs', 'signup']

// Dependencies.
const express = require('express')
const http = require('http')
const morgan = require('morgan')
const path = require('path')

const app = express()
const server = http.Server(app)

app.set('port', PORT)
app.set('view engine', 'pug')

// app.use('/favicon.ico', express.static(path.join(__dirname)))
app.use(morgan('dev'))
app.use('/client', express.static(path.join(__dirname, '/client')))

app.get('/', (request, response) => {
  response.redirect('/home')
})

app.get('/:page', (request, response, next) => {
  if (PAGES.includes(request.params.page)) {
    response.render(request.params.page)
  } else {
    next()
  }
})

app.use((request, response) => {
  response.status(404).render('404')
})

// Starts the server.
server.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`STARTING SERVER ON PORT ${PORT}`)
  /* eslint-enable no-console */
})
