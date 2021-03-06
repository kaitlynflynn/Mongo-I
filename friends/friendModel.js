const mongoose = require('mongoose');

const definition = {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 120
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
    //STRETCH for contactInfo
    contactInfo: {
        Email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        gitHub: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        facebook: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: true
        },
    },
};

const options = {
    timestamps: true,
}; 

const friendSchema = new mongoose.Schema(definition, options);

const friendModel = mongoose.model('Friend', friendSchema, 'friends');

//export
module.exports = friendModel;