const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    year: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

studentSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {expiresIn: '7d'});
    return token;
};

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        college: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
        year: Joi.string().required(),
    });
    return schema.validate(data);
}

const Student = mongoose.model('students', studentSchema);
module.exports = { Student, validate };