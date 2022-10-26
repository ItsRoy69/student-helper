const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name: {
        type: String,
    },
    college: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    department: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

facultySchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {expiresIn: '7d'});
    return token;
};

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        college: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
        department: Joi.string().required(),
    });
    return schema.validate(data);
}

const Faculty = mongoose.model('faculties', facultySchema);
module.exports = { Faculty, validate };