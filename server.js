// provides utilities for working with file and directory paths
const path = require('path');

//Loads the express module
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

//Loads the handlebars module
const exphbs = require('express-handlebars');

// use as template engine for our html
const hbs = exphbs.create({});

// Creates our express server
const app = express();
// set to work with heroku
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves static files (we need it to import a css file, image or javascripst files)
app.use(express.static(path.join(__dirname, 'public')));

//Sets handlebars configurations
app.engine('handlebars', hbs.engine);

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});