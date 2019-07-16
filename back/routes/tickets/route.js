const express = require('express')
const router = express.Router()
const connection = require('../../conf')
const bodyParser = require('body-parser');

router.use((req, res, next) => {
  next()
})

// Support JSON-encoded bodies
router.use(bodyParser.json());

// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));



module.exports = router