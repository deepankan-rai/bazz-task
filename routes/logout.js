const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'User logged out successfully' });
});

module.exports = router;