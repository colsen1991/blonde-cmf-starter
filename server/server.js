const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const getEnv = require('../utils/env.js').getEnv;
const { server: serverConfig, database: databaseConfig } = require('../blonde-config');
const cors = require('./middleware/cors');
const authenticate = require('./middleware/authentication');
const authorize = require('./middleware/authorization');
const validate = require('./middleware/validation');

console.log(`Server starting in ${getEnv().toUpperCase()} mode`);

const app = require('express')();

const database = databaseConfig.enable ? require('./api/db')(databaseConfig) : null;

if (serverConfig.cors) app.use(cors(database.api.couchConfig));

if (serverConfig.middleware && serverConfig.middleware.length) serverConfig.middleware.forEach(middleware => app.use(middleware));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(authenticate());
app.use(authorize());
app.use(validate());
app.use(database.api);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
