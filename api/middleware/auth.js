const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


const auth = async(req, res, next) =>{
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401) // if there isn't any token

        const decoded = jwt.verify(token, '16f237faf903a49a3e6b7a5261fc3ac4289ffb4634df4adbe07501469fd57c9c5a6b154a4fe3c5ed51fd21a31c1132d1e14a19f269b1851bb42cad005e4c26c7');
        console.log(decoded.user._id);
        const user = await User.findOne({ _id: decoded.user._id, "tokens.token": token });
        if(!user) {
            throw new Error();
        }

        req.token = token
        req.user = user
        next()
    }catch(e){
        res.status(401).send({ error: 'Please authenticate.'});
    }
}

module.exports = auth