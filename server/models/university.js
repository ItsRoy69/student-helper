const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universitySchema = new Schema({
    name: {
        type: String,
    },
    events: {
        type: Array,
    },
    clubs: {
        type: Array,
    },
    notes: {
        type: Array,
    },
    canteens: {
        type: Array,
    },
    location: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        location: Joi.object().required(),
    });
    return schema.validate(data);
}

const University = mongoose.model('universities', universitySchema);
module.exports = { University, validate };