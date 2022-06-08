const express = require("express");
const router = express.Router();

const Features = require('../../models/Features');


router.get('/', (req, res) => res.send('features route'))

module.exports = router;