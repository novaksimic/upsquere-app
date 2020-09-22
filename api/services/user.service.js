const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.signup = (user) => {
    
try {

    userModel.getUserById(user.email, (err, existingUser) => {
        if(err) {
            throw err;
        }
        if(existingUser !== null){
            return {success: true, body: "User already exists"}
        }
        
    });
                
    if (user.password === user.confirmPassword) {
                
        let hashedPassword = bcrypt.hash(user.password, 12);
                    
        let newUser = {
            email: user.email,
            password: hashedPassword,
            role: 'user'
        }
        
        let userSession = {
            id: newUser.id,
            email: newUser.email,
            role: newUser.role
         }
        req.session.isLoggedIn = true;
        req.session.user = userSession;

        userModel.addUser(newUser, (err, newUser) => {
        if(err) {
            throw errr;
        }
        return {success: true, body: newUser}
    });
    
    }else {
        return {success: true, body: "Password do not match"}
    }   
    

}catch(err) {
    return {success: false, error: err};
}

}  

exports.login = (user) => {
      

    userModel.findOne({ email: user.email })
    .then(userDoc => {
        console.log(userDoc);
        bcrypt.compare(user.password, userDoc.password)
            .then(doMatch => {
                if (doMatch) {
                    const userSession = {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                    req.session.isLoggedIn = true;
                    req.session.user = userSession;
                    return req.session.save(err => {
                        console.log(err);
                    });
                }
                console.log("Password wrong");
            });
    }).catch(err => {
        console.log(err);
    });
}
