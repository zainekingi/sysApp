/* ============================================================================
FILE_NAME:  users.js
AUTHOR:     Zaine Kingi
DESC:       Main model for interacting with the USERS database collection.
============================================================================= */
//File Dependencies ------------------------------------------------------------
var mongoose = require('mongoose');

//Define the USERS schema ------------------------------------------------
var usersSchema = mongoose.Schema({
    //First Name
    first_Name: {
        type: String,
        minlength: 3,
        trim: true,
        required: 'First Name is required!'
    },
    //Last Name
    last_Name: {
        type: String,
        minlength: 3,
        trim: true,
        required: 'Surname is required!'
    },
    //Email
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required!'
    },
    //Password
    password: {
        type: String,
        trim: true,
        minlength: 8,
        required: 'A password is required!'
    },
    //Record creation date.
    create_date: {
        type: Date,
        default: Date.now()
    }
});

//Export the Users schema.
var Users = module.exports = mongoose.model('Users', usersSchema);

//USER methods ------------------------------------------------------------
//Get collection.
module.exports.getUsers = function(callback, limit) {
    Users.find(callback).limit();
}
//Get record by ID.
module.exports.getUserById = function(id, callback) {
    Users.findById(id, callback);
}

//Add new record.
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
