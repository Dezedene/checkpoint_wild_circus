const express = require('express')
const router = express.Router()
const connection = require('../../conf')
const bodyParser = require('body-parser');

const { getByClientName } = require('./queries')

router.use((req, res, next) => {
  next()
})

// Support JSON-encoded bodies
router.use(bodyParser.json());

// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));


router.get('/:name', (req, res) => {
  const clientName = req.params.clientName

  connection.query(getByClientName, [clientName], (err, datas) => {
    if (err) {
      res.status(500).send(`error when trying to get client name ${clientName} : ${err}`)
    } else {
      res.json(datas)
    }
  })
})


module.exports = router