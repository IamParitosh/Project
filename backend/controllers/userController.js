const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
constjwt = require("jsonwebtoken");

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPass
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User Added Successfully !...'
            })
        })
        .catch(error => {
            res,json({
                message: 'An Error Occured !!!..'
            })
        })
    })
}

// Login 

const login = (req, res, next)=> {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email: username}, {phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successfull !...',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password does Not Matched..!'
                    })
                }
            })
        } else {
            res.json({
                message: 'No User Found !..'
            })
        }  
    })
}
module.exports = { register, login };