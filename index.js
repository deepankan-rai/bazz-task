const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/baaz', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('open',function(){})

const registerRoute = require('./routes/registerUser');
const loginRoute = require('./routes/userLogin');
const userRoute = require('./routes/userInfo');
const logoutRoute = require('./routes/logout');
const updateUserRoute = require('./routes/updateUser');

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/logout', logoutRoute);
app.use('/updateUser', updateUserRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
