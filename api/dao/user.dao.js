const userModel = require("../models/user.model");

// Create user dao
exports.userCreate = (user) => {
    const createUser = new userModel({
        email: user.email,
        password: user.password,
        role: user.role
    });
    console.log(createUser)

    return createUser.save().then(userDoc => {
        console.log("DB item saved ----->", userDoc);
    }).catch(err => {
        console.log(err);
    });
}

exports.getUserById = (user) => {
    return userModel.findOne({id: user.id});
}

// Find user dao
exports.userExists = (user) => {

    userModel.findOne({email: user.email})
        .then(userDoc => {
            return userDoc
        }).catch(err => {
            console.log(err);
        });

}



