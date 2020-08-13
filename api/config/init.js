const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "prod") {
    require("dotenv").config();
}

const mongoUrl = "mongodb+srv://"+ process.env.DB_UNAME +":" + process.env.DB_PASS +"@cluster0-vt30u.mongodb.net/"+ process.env.DB_NAME +"?retryWrites=true&w=majority";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
    initDB: async() => {
        mongoose.connect(mongoUrl, { useNewUrlParser: true});
        mongoose.Promise = global.Promise;
    },
    cors: async(req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
        }
        next();
    }
}
