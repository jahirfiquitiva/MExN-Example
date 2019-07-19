const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const uiRoutes = require('./routes/ui');
const statusRoutes = require('./routes/status');
const peopleRoutes = require('./routes/people');

require('./drivers/mongo-connection');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
// Convierte el Body de string -> json
app.use(bodyParser.json());

app.use((request, response, next) => {
  // `${}` String template
  // 'Petición de tipo ' + request.method
  console.log(`Petición de tipo ${request.method}`);
  next();
});

app.use((req, res, next) => {
  let now = new Date();
  console.log(`Inició la petición ${req.url} ${req.method} a las ${now.toISOString()}`);
  next();
  now = new Date();
  console.log(`Terminó la petición a las ${now.toISOString()}`);
});

app.use('/', uiRoutes);
app.use('/api/', statusRoutes);
app.use('/api/people/', peopleRoutes);

module.exports = app;
