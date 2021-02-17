const { connectDB } = require('./config/db');
const Hero = require('./models/hero');

function getHeroes(req, res) {
    Hero.model.find({}).exec()
    .then(heroes => {
        res.setHeader('Content-Type', 'application/json')
         return res.json(heroes)
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

function createHero(req, res) {
    const {id, name} = req.body;

    const hero = new Hero.model({id, name});

    hero.save()
    .then(() => res.json(hero))
    .catch(err => {
        res.status(500).send(err);
    });
}

function deleteHero(req, res) {
    const {heroId} = req.params
    Hero.model.deleteOne({_id: heroId})
    .then(act => res.send(act))
    .catch(err => res.status(500).send(err));
}

module.exports = {getHeroes, createHero, deleteHero}; 