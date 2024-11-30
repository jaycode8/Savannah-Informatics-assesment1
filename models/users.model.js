const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4(),
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { timestamps: true }
);

module.exports = { userSchema};
