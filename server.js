const express = require('express');
const app = express();

require('dotenv').config({path:'./.env'});

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
})

app.get('/hello', (req, res) => {
    res.send("Hello Bart Tabusao")
})