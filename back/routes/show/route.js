const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

router.use((req, res, next) => {
  next
})

// Support JSON-encoded bodies
router.use(bodyParser.json());

// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true,
}));


router.use((req, res, next) => {
  next()
})

//  app.get('/', (request, response) => {
//  response.send('Bienvenue sur le Wild Circus 2.0');
//  });

module.exports = router