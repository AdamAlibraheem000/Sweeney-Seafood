const mongoose = require('mongoose');

const FeaturesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true
    }
});

module.exports = Features = mongoose.model('features', FeaturesSchema);