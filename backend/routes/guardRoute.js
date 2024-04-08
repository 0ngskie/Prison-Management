const express= require('express')
const router = express.Router()

const guardController = require('../controllers/guardController')

// get all the lists of prisoners
router.get('/all', guardController.all)
router.get('/search/:id', guardController.search)
router.get('/guard/:id/:rank/:yearsOfService', guardController.guard)
router.delete('/delete/:id', guardController.delete)

module.exports = router;