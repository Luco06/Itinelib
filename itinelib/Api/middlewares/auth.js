const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // "Bearer eyjhjkljsldjskmldjmlsjklmdjlmsdjklm.jjljkls"
        // on ne récupère que le token, sans le mot clef "Bearer"
        if(req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            const payload = jwt.verify(token,'Faire_De_La_Rando_Avec_Un_Sac_A_Dos');
            next();
        } else {
            res.status(401).send(`Forbidden request : no token`)
        }

    } catch (err) {
        if(err) {
            console.log(err);
        }
        res.status(401).send(`Forbidden request : bad token`)
    }
}