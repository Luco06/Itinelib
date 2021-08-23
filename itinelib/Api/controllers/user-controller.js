const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {

    register = async (req, res) => {
        try {
            console.log(req);
            console.log(req.body.user);
            const email = req.body.email;
            let user = await User.findOne({where: {email}});
            if(user) {
                res.status(400).send('Utilisateur déjà existant')
            } else {
                const password = await bcrypt.hash(req.body.password, 10);
                user = {email, password};
                // = user { email : email, password : password }
                const data  = await User.create(user)
                res.json({email: data.email, createdAt: data.createdAt});
            }
        } catch (err)  {
            console.log(err);
            res.status(400).send('Mauvaise requête');
        }
    }

    login = async (req, res) => {
        let email, password;
         try {
             email = req.body.email;
             password = req.body.password;
         } catch (err) {
             res.status(400).send('Mauvais body');
         }

         const user = await User.findOne({where: {email}});
         if(!user) {
             res.status(401).send(`Erreur d'authentification`);
         } else {
            const isValid = await bcrypt.compare(password, user.password);
            if(!isValid) {
                res.status(401).send(`Erreur d'authentification`);
            } else {
                const token = jwt.sign(
                    {userId: user.id},
                    'Faire_De_La_Rando_Avec_Un_Sac_A_Dos',
                    {expiresIn: '24h'}
                );

                res.json({
                    id: user.id,
                    email: user.email,
                    token
                })
            }
         }
    }

    // getAll = async (req, res) => {
    //     const data = await User.findAll();
    //     res.json(data);
    // }

    getOne = async (req, res) => {
        const id = req.params.id;
        const data = await User.findByPk(id,{
            include: [
                {
                    model: Itineraries,
                    as: 'itinerary',
                    attributes: [ 'depart', 'arriver', 'ville', 'region', 'transport'],
                },
            ]
        });
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
            preferences: req.body.preferences,
        }
        const data = await User.create(new_user,);
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
            where: {id: id},
            include :[
                {model: Itineraries, as:'itinerary'}
            ]
        });
        res.json(data);
    }
}

module.exports = new UserController();