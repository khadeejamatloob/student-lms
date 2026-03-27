const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "Student Registered Successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};