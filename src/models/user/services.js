const User = require("./index");

// Function to create a new user in the database
exports.create = async (userData) => {
    try {
        // Use the User model to create a new user document with the provided userData
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

// Function to find a user in the database by email
exports.getByEmail = async (userData) => {
    try {
        // Use the User model to find a user document that matches the provided userData
        const user = await User.findOne(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

