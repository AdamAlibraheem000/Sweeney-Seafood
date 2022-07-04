const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')


require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// Allows express to access form data
app.use(express.urlencoded({extended: false}))


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
})

const connection = mongoose.connection;
connection.once("open", () => 
 console.log("Mongo connected"))

 const articlesRouter = require('./routes/articles');
 app.use('/articles',articlesRouter);

app.listen(port, () => console.log(`App running on port ${port}`));

