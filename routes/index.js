const router        = require('express').Router()
const Controller    = require('../controllers/Controller')

//router customer
router.get('/', Controller.show)
router.get('/add', Controller.add)
router.post('/add', Controller.addPost)
router.post('/search', Controller.find)
router.get('/:id/edit', Controller.edit)
router.post('/:id/edit', Controller.editPost)
router.get('/:id/delete', Controller.destroy)

module.exports = router