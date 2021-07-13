const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paymentRoute = require('./paymentRoute');
const mongoose = require('mongoose');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 5000


mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/payment", {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch(() => console.log("FAILED TO CONNET WITH DB"));

app.use(bodyParser.json());
app.use(cors());

app.use('/api', paymentRoute);


app.listen(PORT, console.log('App is running'))