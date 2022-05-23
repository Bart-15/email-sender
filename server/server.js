const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({path:'./.env'});

const PORT = process.env.PORT || 3000;
const api = process.env.API

// lost of all routes;
const emailSender = require('./routes/emailSender')

app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use(`${api}`, emailSender)

app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
})

