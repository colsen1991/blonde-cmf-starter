const express = require('express');
const bodyParser = require('body-parser');

console.log(`Server starting in ${process.env.NODE_ENV.toUpperCase()} mode...`);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, (...args) => {
  console.log(args);
});
