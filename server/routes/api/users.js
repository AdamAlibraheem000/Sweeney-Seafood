const express = require("express");
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');


router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter valid email').isEmail(),
    check('password', 'Please enter password with 6 or more characters').isLength({min: 6})
],


async (req, res) => {
    const errors = validationResult(req);

    // check for errors
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    
    const {name, email, password} = req.body;

    try{

        // See if user exists in database
        let user = await User.findOne({email});

        // If user already exists, return error message
        if(user){
            res.status(400).json({errors:[{msg: 'User already exists'}]})
        }

        // Creates new instance of user but does not save to database
        user = new User({
            name,
            email,
            password
        });

        // Encrypt password with bcrypt

        // create salt to hash password
        // 10 rounds of salt
        const salt = await bcrypt.genSalt(10);

        // Hash password
        user.password = await bcrypt.hash(password, salt);

        // Save to database
       await user.save();

    // Return jsonwebtoken

    res.send("User registered")

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }

    


})

module.exports = router;