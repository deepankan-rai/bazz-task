const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');  

router.post('/', async (req, res) => {
    const { name, username, email, password } = req.body;
    console.log(req.body);

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, username, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({ error: 'Username or email already exists' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});

module.exports = router;