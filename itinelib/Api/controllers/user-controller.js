const db = require('../models');
const User = db.User;

class UserController {

    getAll = async (req, res) => {
        const data = await User.findAll();
        res.json(data);
    }

    getOne = async (req, res) => {
        const id = req.params.id;
        const data = await User.findByPk(id);
        res.json(data);
    }

    create = async (req, res) => {
        const new_user = {
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            city: req.body.city,
            preferences: req.body.preferences
        }
        const data = await User.create(new_user);
        res.json(data);
    }

    update = async (req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);
        const updated_user = {
            lastname: req.body.lastname || user.lastname,
            firstname: req.body.firstname || user.firstname,
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            age: req.body.age || user.age,
            city: req.body.city || user.city,
            preferences: req.body.preferences || user.preferences
        }
        const data = await User.update(updated_user, { where: {id: id}});
        res.json(data);
    }

    delete = async (req, res) => {
        const id = req.params.id;
        const data = await User.destroy({
            where: {id: id}
        });
        res.json(data);
    }
}

module.exports = new UserController();