/* ============================================================================
FILE_NAME:  schools.js
AUTHOR:     Zaine Kingi
DESC:       Main model for interacting with the SCHOOL database collection.
============================================================================ */
//File Dependencies -----------------------------------------------------------
//Mongoose.
var mongoose = require('mongoose');

//Define the SCHOOL Schema ----------------------------------------------------
var schoolsSchema = mongoose.Schema({
    //School admin first name.
    admin_fname: {
        type: String,
        trim: true,
        //required: 'School admin First Name is required!'
    },
    //School admin last name.
    admin_lname: {
        type: String,
        trim: true,
        //required: 'School admin last name is required!'
    },
    //School email.
    school_email: {
        type: String,
        trim: true,
        //required: 'School contact email is required!'
    },
    //School name.
    school_name: {
        type: String,
        trim: true,
        //required: 'A school name is required!'
    },
    //Address.
    address_no: {
        type: String,
        trim: true,
        //required: 'A street or post office box number is required!'
    },
    street_name: {
        type: String,
        trim: true,
        //required: 'A street name is required!'
    },
    street_type: {
        type: String,
        trim: true
    },
    suburb: {
        type: String,
        trim: true,
        //required: 'A suburb is required!'
    },
    post_code: {
        type: String,
        trim: true,
        //required: 'A post code is required!'
    },
    city: {
        type: String,
        trim: true,
        //required: 'A city is required!'
    },
    country: {
        type: String,
        trim: true,
        //required: 'A country is required!'
    },
    //Phone number.
    phone_number: {
        type: String,
        trim: true,
        //required: 'A contact phone number is required!'
    },
    //School role size.
    role_size: {
        type: String,
        trim: true,
        //required: 'A school role size is required!'
    },
    //Record creation date.
    create_date: {
        type: Date,
        default: Date.now()
    }
});

//Export the SCHOOL schema ----------------------------------------------------
var Schools = module.exports = mongoose.model('Schools', schoolsSchema);

//SCHOOL methods --------------------------------------------------------------
//Get collection.
module.exports.getSchools = function(callback, limit) {
    Schools.find(callback).limit();
}

//Get record by ID.
module.exports.getSchoolById = function(id, callback) {
    Schools.findById(id, callback);
}

//Add new record.
module.exports.addSchool = function(school, callback) {
    Schools.create(school, callback);
}

//Update record.
module.exports.updateSchool = function(id, school, options, callback) {
    var query = { _id: id };
    var update = {
        admin_fname:        school.admin_fname,
        admin_lname:        school.admin_lname,
        school_email:       school.school_email,
        school_name:        school.school_name,
        address_no:         school.address_no,
        street_name:        school.street_name,
        street_type:        school.street_type,
        suburb:             school.suburb,
        city:               school.city,
        post_code:          school.post_code,
        country:            school.country,
        phone_number:       school.phone_number,
        role_size:          school.role_size
    }
    Schools.findOneAndUpdate(query, school, options, update, callback);
}

//Delete record.
module.exports.deleteSchool = function(id, callback){
    var query = {_id: id};
    Schools.remove(query, callback);
}
//End: SCHOOL MODEL ===========================================================