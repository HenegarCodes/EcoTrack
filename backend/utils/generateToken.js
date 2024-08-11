const jwt = require('jsonwebtoken');
require('dotenv').config({path:'backend/.env'});

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("All env variables:", process.env);

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expires in 30 days
    });
};

module.exports = generateToken;
