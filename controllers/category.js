<<<<<<< HEAD
const Category = require('../models/Category')
const errorHandler = require('../utils/errorHendler')
const Position = require('../models/Position')


module.exports.getAll = async function(req, res) {
    try {
        const categories = await Category.find({ user: req.user.id })
        res.status(200).json(categories)
=======
module.exports.getAll = function(req, res) {
}
module.exports.getbyId = function(req, res) {
>>>>>>> bdc527006fb425f38416a033f2b91cd831b2b8b0

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getbyId = async function(req, res) {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.remove = async function(req, res) {
    try {
        await Category.remove({ _id: req.params.id })
        await Position.remove({ category: req.params.id })
        res.status(200).json({
            message: "category was delete"
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.create = function(req, res) {
    try {

    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.update = function(req, res) {
    try {

    } catch (e) {
        errorHandler(res, e)
    }

}