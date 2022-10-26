const router = require('express').Router();
const { Faculty, validate } = require('../models/faculty');
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
        
        const faculty = await Faculty.findOne({ email: req.body.email });
        if (faculty) return res.status(400).send('Faculty already registered.');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newFaculty = new Faculty({
            name: req.body.name,
            college: req.body.college,
            email: req.body.email,
            password: hashedPassword,
            department: req.body.department,
        });

        await newFaculty.save();
        res.status(201).send('Faculty registered successfully.');
    }catch(error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
})

router.post("/login", loginValidation, async (req, res) => {
    try {
        const faculty = await Faculty.findOne({ email: req.body.email });
        if (!faculty) return res.status(401).send('Invalid Email.');

        const validPassword = await bcrypt.compare(req.body.password, faculty.password);
        if (!validPassword) return res.status(401).send('Invalid Password.');

        const token = Faculty.generateAuthToken();
        res.status(200).send({ data: token, message: 'Login successful.' });
    }catch(error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
})

module.exports = router;