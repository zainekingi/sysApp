/* ============================================================================
FILE_NAME:  index.js
AURTHOR:    Zaine Kingi
DESC:       Main application file for server configuration and interaction.
============================================================================ */

//Application Dependencies ---------------------------------------------------
var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Users       = require('./models/users');

//Set static directory -------------------------------------------------------
app.use(express.static(__dirname + '/client'));

//Application Middleware -----------------------------------------------------
app.use(bodyParser.json());

//Application Routes ---------------------------------------------------------
app.get('/', function(req, res, next) {
    res.send('../client/index.html');
    next();
});

//START: USER MODEL ==========================================================
//Create user.
app.post('/api/users', function(req, res) {
    //Store post form data.
    var user = req.body;
    Users.addUser(user, function(err, user) {
        //Check for errors.
        if(err) {
            throw err;
        }
        res.json(user);
    });
});
//Get users.
app.get('/api/users', function(req, res) {
    Users.getUsers(function(err, users) {
        //Check for errors.
        if(err) {
            throw err;
        }
        //No errors.
        res.json(users);
    });
});
//Get record by ID.
app.get('/api/users/:_id', function(req, res) {
    var id = req.params._id;
    Users.getUserById(id, function(err, users) {
        //Check for errors.
        if(err) {
            throw err;
        }
        //No errors.
        res.json(users);
    });
});
//Update record.
app.put('/api/users/:_id', function(req, res) {
    //Get the user ID.
    var id = req.params._id;
    //Store form post data.
    var user = req.body;
    Users.updateUser(id, user, function(err, user) {
        //Check for errors.
        if(err) {
            throw err;
        }
        //No errors.
        res.json(user);
    });
});
//Delete record.
app.delete('/api/users/:_id', function(req, res) {
    var id = req.params._id;
    Users.deleteUser(id, function(err,user) {
        //Check for errors.
        if(err) {
            throw err;
        }
        res.json(user);
    });
});
//END: USER MODEL ============================================================
//Application Server ---------------------------------------------------------
mongoose.connect('mongodb://localhost/sysApp');
var db = mongoose.connect;
app.listen(3000);
console.log('Listening on port 3000');
