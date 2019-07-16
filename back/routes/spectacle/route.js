const express = require('express')
const router = express.Router()
const connection = require('../../conf')
const bodyParser = require('body-parser');

const { getBySpectacleSession } = require('./queries')

router.use((req, res, next) => {
  next()
});



router.get('/date/:id', (req, res) => {
  const spectacleSession = req.params.id

  connection.query(getBySpectacleSession, [spectacleSession], (err, datas) => {
    if (err) {
      res.status(500).send(`error when trying to get Spectacle session ${spectacleSession} : ${err}`)
    } else {
      res.json(datas)
    }
  })
})


module.exports = router