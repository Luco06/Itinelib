const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');

// Authentification Requests
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// User Requests
router.get('/user/:id', UserController.getOne);
// router.get('/user', UserController.getAll );
router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

// Itineraries Requests

router.use( (req, res) => {
    res.status(404).send("not found");
});

module.exports = router;