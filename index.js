require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crudRouter = require('./routes/crud.router.js');
const errorHandler = require('./middleware/errorHandler.middleware.js');

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL; //URL to connect MongoDB (use your own link)
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', crudRouter);
app.use(errorHandler);

const start = () => {
    try {
        mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();