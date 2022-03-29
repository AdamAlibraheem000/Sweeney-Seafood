const { Schema, model } = require('mongoose');

const barMenuSchema = new Schema(
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
        },
        BottlePrice: {
            type: Number,
            required: false
        }
    }
);

const BarMenu = model('BarMenu', barMenuSchema);

module.exports = BarMenu;