const express = require('express')
const controller = require('../controllers/category')
const upload = require('../middleware/upload')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('jwt', { session: false }), controller.getAll)
router.get('/:id', passport.authenticate('jwt', { session: false }), controller.getbyId)
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.remove)
router.post('/', passport.authenticate('jwt', { session: false }), upload.single('image'), controller.create)
router.patch('/:id', passport.authenticate('jwt', { session: false }), upload.single('image'), controller.update)



module.exports = router