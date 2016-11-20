/* ============================================================================
FILE_NAME:  users.js
AUTHOR:     Zaine Kingi
DESC:       Main model for interacting with the USERS database collection.
============================================================================= */
//File Dependencies ------------------------------------------------------------
var mongoose = require('mongoose');

//Define the USERS model schema ------------------------------------------------
var usersSchema = mongoose.Schema({
    //First Name
    first_Name: {
        type: String,
        required: true
    },
    //Last Name
    last_Name: {
        type: String,
        required: true
    },
    //Email
    email: {
        type: String,
        required: true
    },
    //Password
    password: {
        type: String,
        required: true
    },
    //Record creation date.
    create_date: {
        type: Date,
        default: Date.now()
    }
});

//Export the Users schema.
var Users = module.exports = mongoose.model('Users', usersSchema);

//Database interactions.
//Get collection.
module.exports.getUsers = function(callback, limit) {
    Users.find(callback).limit();
}
//Get record by ID.
module.exports.getUserById = function(id, callback) {
    Users.findById(id, callback);
}
//Add record.
module.exports.addUser = function(user, callback) {
    Users.create(user, callback);
}
//Update record.
module.exports.updateUser = function(id, user, options, callback) {
    var query = { _id: id };
    var update = {
        first_Name:     user.first_Name,
        last_Name:      user.last_Name,
        email:          user.email,
        password:       user.password
    }
    Users.findOneAndUpdate(query, user, options, update, callback);
}
//Delete record.
module.exports.deleteUser = function(id, callback) {
    var query = {_id: id};
    Users.remove(query, callback);
}
//End: USER MODEL ===============================================================