const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
const ItineraryController = require('../controllers/itinerary-controller');

router.get('/user/:id', UserController.getOne);
router.get('/user', UserController.getAll );
router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

router.get('/itinerary/:id', ItineraryController.getOne);
router.post('/itinerary', ItineraryController.create);
router.delete('/itinerary/:id', ItineraryController.delete);

router.use( (req, res) => {
    res.status(404).send("not found");
});

module.exports = router;