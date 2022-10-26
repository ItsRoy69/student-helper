const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conn = require('./db');
const studentRoutes = require('./routes/students');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api", studentRoutes);

//default route
app.get('/', (req, res) => {
    res.send('Welcome to Student-helper server v1.0.0!');
});

// Connection to database and starting the express server
conn().then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log('Server is running on port: '+process.env.PORT || 8080);
    });
})

