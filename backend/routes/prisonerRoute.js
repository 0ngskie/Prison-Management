const express= require('express')
const router = express.Router()

const prisonerController = require('../controllers/prisonerController')

// get all the lists of prisoners

router.get('/prisoners', prisonerController.prisoners)

router.get('/greet/person', prisonerController.greet)

router .get('/search/prisoner', prisonerController.searchPrisoner)

module.exports = router;