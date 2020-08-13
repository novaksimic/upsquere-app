const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.postLogin = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email})
        .then(user => {
            if(user.length > 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(password, user.password, (err ,res) => {
                if(err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
            })
            .then(doMatch => {
                if(doMatch) {
                    return res. redirect('/');
                }
                res.status(200).redirect('/login');
            })           
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postLogout = (req, res, next) => {

    res.status(200).redirect('/');
}

exports.postSignup = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    User.findOne({email: email})
        .then(userDoc => {
            if(userDoc){
                return res.redirect('/signup');
            }
            if(password === confirmPassword){
                return bcrypt
                    .hash(password, 12)
                    .then(hashedPassword => {
                         const user = new User({
                             email,
                             password: hashedPassword,
                             role: 'user'
                         });
                         return user.save();                         
                    })
                    .then(() => {
                        res.status(201).redirect('/');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
            return res.redirect('/signup');
        })
        .catch(err => {
            console.log(err);
        });
}