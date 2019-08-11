const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server connected to ${PORT}`);
});