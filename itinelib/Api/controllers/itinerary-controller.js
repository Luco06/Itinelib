const db = require('../models');
const Itineraries = db.itinerary;


class ItineraryController {

    getOne = async (req, res) => {
        const id = req.params.id;
        const data = await Itineraries.findByPk(id  );
        res.json(data);
    }
    
    create = async (req, res) => {
        console.log(req.body.itinerary)
        const new_itinerary = {
            depart: req.body.depart,
            arriver: req.body.arriver,
            ville: req.body.ville,
            region: req.body.region,
            transport: req.body.transport
        }
        const data = await Itineraries.create(new_itinerary,);
        res.json(data);
    }
    delete = async (req, res) => {
        const id = req.params.id;
        const data = await Itineraries.destroy({
            where: {id: id}
        });
        res.json(data);
    }
}
module.exports = new ItineraryController();