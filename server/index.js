const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

//routes

app.use('/auth', require('./routes/authRoutes.js'));

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
