const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// const uri='mongodb+srv://deepankanrai2000:Deepankan@123@cluster0.hlfs9lo.mongodb.net/bazz?retryWrites=true&w=majority';
app.use(bodyParser.json());
const uri='mongodb+srv://deepankanrai2000:Deepankan123@cluster0.hlfs9lo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
console.log("Connected to MongoDB");

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
