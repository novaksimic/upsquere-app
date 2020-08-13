const dbConnection = require("./db/mongoose");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/task.route");
const authRoutes = require("./routes/auth.routes");
const config = require("./config/init");

const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "prod") {
  require("dotenv").config();
}

/* const rndCrypto = require('crypto').randomBytes(64).toString('hex');
console.log(rndCrypto); */

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(taskRoutes);
app.use(authRoutes);

app.use(config.cors);
app.use(config.initDB);

app.listen(port);

