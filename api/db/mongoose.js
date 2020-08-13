const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "prod") {
  require("dotenv").config();
}

const MONGODB_URI =
  "mongodb+srv://"+ process.env.DB_UNAME +":" +
  process.env.DB_PASS +
  "@cluster0-vt30u.mongodb.net/"+ process.env.DB_NAME +"?retryWrites=true&w=majority";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  MONGODB_URI,
};
