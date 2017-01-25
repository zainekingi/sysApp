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
    Users       = require('./models/users'),
    Schools     = require('./models/schools');

//Set static directory -------------------------------------------------------
app.use(express.static(__dirname+'/../client'));

//Application Middleware -----------------------------------------------------
app.use(bodyParser.json());

//Application Routes ---------------------------------------------------------
app.get('/', function(req, res, next) {
    res.send('Hmmmmm? how did you get here?? Try /login or /register');
    next();
});

//START: USER MODEL ==========================================================
//Create user.
app.post('/api/users', function(req, res) {
    //Store form post data.
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

//START: SCHOOL MODEL ========================================================
//Create School.
app.post('/api/schools', function(req, res){
    //Store post form data.
    var school = req.body;
    //Call the Schools model addSchool method.
    Schools.addSchool(school, function(err, school){
        //Check for errors in the request data.
        if(err) {
            throw err;
        }
        //If no errors, send the stored form data as the response, formatting as JSON.
        res.json(school);
    });
});
//Get School.
app.get('/api/schools', function(req,res) {
    Schools.getSchools(function(err, schools) {
        //Check if the collection exists and if it has any records.
        if(err) {
            throw err;
        }
        //No errors occurred, send response.
        res.json(schools);
    });
});
//Get School by ID.
app.get('/api/schools/:_id', function(req, res) {
    //Get the ID from the URL parameter.
    var id = req.params._id;
    Schools.getSchoolById(id, function(err, school) {
        //Check if an ID is returned from the database.
        if(err) {
            throw err;
        }
        //No errors occurred, send response.
        res.json(school);
    });
});
//Update School.
app.put('/api/schools/:_id', function(req, res) {
    //Get the ID from the URL parameter.
    var id = req.params._id;
    //Store the post form data.
    var school = req.body;
    Schools.updateSchool(id, school, function(err, school) {
        //Check for errors in the post form data.
        if(err) {
            throw err;
        }
        //No errors occurred, send response.
        res.json(school);
    });
});
//Delete School.
app.delete('/api/schools/:_id', function(req, res) {
    var id = req.params._id;
    Schools.deleteSchool(id, function(err, school) {
        //Check for any errors.
        if(err) {
            throw err;
        }
        //No errors occurred, send response.
        res.json(school);
    });
});
//END: SCHOOL MODEL ==========================================================

//Application Server ---------------------------------------------------------
mongoose.connect('mongodb://localhost/sysApp');
var db = mongoose.connect;
app.listen(3000);
console.log('Listening on port 3000');
