const express = require('express');
const { getHeroes, createHero, deleteHero } = require('../queries');
const router = express.Router();

router.get('/', (req, res) => {
    getHeroes(req, res);
});

router.post('/', (req, res) => {
    createHero(req, res)
})

router.delete('/:heroId', (req, res) => {
    deleteHero(req, res);
})

module.exports = {heroesRouter: router}