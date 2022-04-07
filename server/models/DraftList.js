const { Schema, model } = require('mongoose');

const draftListSchema = new Schema(
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

const DraftList = model('DraftList', draftListSchema);

module.exports = DraftList;