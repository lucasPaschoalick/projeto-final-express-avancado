const User = require('../models/User');

async function insertUser(user) {
    
    console.log('User inserted:', user);
    return user;
}

module.exports = {
    insertUser
};