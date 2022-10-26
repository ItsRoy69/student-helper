const router = require('express').Router();
const { Student, validate } = require('../models/student');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
}

router.post("/register", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        
        const student = await Student.findOne({ email: req.body.email });
        if (student) return res.status(400).send('Student already registered.');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newStudent = new Student({
            name: req.body.name,
            college: req.body.college,
            email: req.body.email,
            password: hashedPassword,
            year: req.body.year,
        });

        await newStudent.save();
        res.status(201).send('Student registered successfully.');
    }catch(error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
})

router.post("/login", loginValidation, async (req, res) => {
    try {
        const student = await Student.findOne({ email: req.body.email });
        if (!student) return res.status(401).send('Invalid Email.');

        const validPassword = await bcrypt.compare(req.body.password, student.password);
        if (!validPassword) return res.status(401).send('Invalid Password.');

        const token = student.generateAuthToken();
        res.status(200).send({ data: token, message: 'Login successful.' });
    }catch(error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
})

module.exports = router;