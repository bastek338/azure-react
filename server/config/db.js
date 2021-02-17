const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');

async function connectDB(){
    const uri = process.env.DB_STRING;
    try {
    const res = await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });
    console.log(`Connected in MongoDB: ${res.connection.host}`)
    } catch (error) {
        console.log('Error' + error.message);
        process.exit(1);
    }
}

module.exports = {connectDB}