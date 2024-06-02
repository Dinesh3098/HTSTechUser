const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        // Define the email, password ,firstName lastName field, which is required and will be trimmed of whitespace
        email: { type: String, required: true, trim: true },
        password: { type: String },
        firstName: { type: String, trim: true },
        lastName: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

module.exports = userSchema;
