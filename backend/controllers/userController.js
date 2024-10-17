const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModels');

const Register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        return res.json({ message: 'All fields are mandatory' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        return res.json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({ name, email, password: hashedPassword });
    if (user) {
        res.status(201).json({ _id: user.id, name: user.name, email: user.email });
    } else {
        res.status(400);
        return res.json({ message: 'Invalid user data' });
    }
});

const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(400).json('User does not exist' );
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ _id: user.id, name: user.name, email: user.email });
    } else {
        res.status(400);
        return res.json({ message: 'Invalid user data' });
    }
});



module.exports = { Register, Login };
