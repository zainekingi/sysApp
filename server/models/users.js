/* ============================================================================
FILE_NAME:  users.js
AUTHOR:     Zaine Kingi
DESC:       Main model for interacting with the USERS database collection.
============================================================================= */
//File Dependencies ------------------------------------------------------------
var mongoose = require('mongoose');

//Define the email validation function.
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

//Define the password validation function.
var validatePassword = function(password){
  var re = /^\(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return re.test(password)
};

//Define the USERS model schema ------------------------------------------------
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
        required: 'Email address is required!',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    //Password
    password: {
        type: String,
        trim: true,
        minlength: 8,
        required: 'A password is required!'
        //validate: [validatePassword, 'Please enter a secure password!'],
        //match: [/^\(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Please enter a secure password!']
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