const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const heroSchema = new Schema({
    id: {type: Number, unique: true, required: true },
    name: String
});

const model = mongoose.model('Hero', heroSchema);

module.exports = {model};