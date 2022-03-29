const { Schema, model } = require('mongoose');

const featureSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
);

const Feature = model('Feature', featureSchema);

module.exports = Feature;