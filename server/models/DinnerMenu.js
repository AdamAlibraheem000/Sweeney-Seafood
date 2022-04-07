const { Schema, model } = require('mongoose');

const dinnerMenuSchema = new Schema(
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

const DinnerMenu = model('DinnerMenu', dinnerMenuSchema);

module.exports = DinnerMenu;