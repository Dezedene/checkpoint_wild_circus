const express = require('express');
const app = express();
var cors = require('cors')
const port = 5000;

const client = require('./routes/client/route')
const spectacle = require('./routes/spectacle/route')
const tickets = require('./routes/tickets/route')

app.use(cors())
app.use('/client', client)
app.use('/spectacle', spectacle)
app.use('/tickets', tickets)


app.listen(port, () => {
  console.log(`server is up and listening on ${port} ...`)
})