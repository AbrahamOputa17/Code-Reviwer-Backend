const express = require('express');
const airoutes = require('./routes/ai.routes');
const app = express();


app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use('/api/ai', airoutes);
module.exports = app;