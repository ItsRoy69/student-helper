const router = require('express').Router();
const { University, validate } = require('../models/university');

//route for getting all universities
router.get('/', async (req, res) => {
    try {
        const universities = await University.find();
        res.status(200).send(universities);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

//route for getting a specific university
router.get('/:universityName', async (req, res) => {
    try {
        const university = await University.findOne({ name: req.params.universityName });
        if (!university) return res.status(404).send('University not found.');
        res.status(200).send(university);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

//route for creating a university
router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const university = await University.findOne({ name: req.body.name });
        if (university) return res.status(400).send('University already registered.');

        const newUniversity = new University({
            name: req.body.name,
            events: [],
            clubs: [],
            notes: [],
            canteens: [],
            location: req.body.location,
        });

        await newUniversity.save();
        res.status(201).send('University registered successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

//route for adding events to university
router.post('/addEvent', async (req, res) => {
    try {
        const university = await University.findOne({ name: req.body.universityName });
        if (!university) return res.status(404).send('University not found.');

        university.events.push(req.body.event);
        await university.save();
        res.status(200).send('Event added successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

//route for adding clubs to university
router.post('/addClub', async (req, res) => {
    try {
        const university = await University.findOne({ name: req.body.universityName });
        if (!university) return res.status(404).send('University not found.');

        university.clubs.push(req.body.club);
        await university.save();
        res.status(200).send('Club added successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

//route for adding notes to university
router.post('/addNote', async (req, res) => {
    try {
        const university = await University.findOne({ name: req.body.universityName });
        if (!university) return res.status(404).send('University not found.');

        university.notes.push(req.body.note);
        await university.save();
        res.status(200).send('Note added successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

//route for adding canteens to university
router.post('/addCanteen', async (req, res) => {
    try {
        const university = await University.findOne({ name: req.body.universityName });
        if (!university) return res.status(404).send('University not found.');

        university.canteens.push(req.body.canteen);
        await university.save();
        res.status(200).send('Canteen added successfully.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.');
    }
});

module.exports = router;