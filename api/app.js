const dbConnection = require("./db/mongoose");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/task.route");
const authRoutes = require("./routes/auth.routes");

const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "prod") {
  require("dotenv").config();
}

/* app.get("/", (req, res) => {
  res.send("App is in process of maintaining. Please visit later.");
});
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(taskRoutes);
app.use(authRoutes);

mongoose
  .connect(dbConnection.MONGODB_URI)
  .then((result) => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
