const express = require('express');
const app = express();
const port = 3000;

const client = require('./routes/client/route')
const show = require('./routes/show/route')
const tickets = require('./route/tickets/route')

app.use('./client', client)
app.use('show', show)
app.use('tickets', tickets)


app.listen(port, () => {
  console.log(`server is up and listening on ${port} ...`)
})