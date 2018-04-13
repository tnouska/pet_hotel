const express = require('express');
//sets the variable for express to the express that we installed with npm
const app = express();
//sets the app variable to the executed function of the express variable we just made.
const bodyParser = require('body-parser');
//sets the variable for bodyParser to the body-parser that we installed with npm.
let port = process.env.PORT || 5002;
//sets the variable port to either whatever heroku uses or 5000.
const homeRouter = require('./routes/home.router');
//sets the homeRouter equal to the router we exported inside of home.router
const dashboardRouter = require('./routes/dashboard.router');
//sets the dashboardRouter equal to the router we exported inside of the dashboard.router 
const managePetsRouter = require('./routes/manage.pets.router');
//sets the managePetsRouter equal to the router we exported inside of the manage.pets.router
app.use(bodyParser.json());
//this is required for angular to be used over express
app.use('/home', homeRouter);
//when the /home url is used it will go through the homeRouter
app.use('/dashboard', dashboardRouter);
//when the /dashboard url is used it will go through the dashboardRouter
app.use('/manage',managePetsRouter);
//when the /manage url is used it will go through the dashboardRouter
app.use(express.static('server/public'));
//this will serve static files in the public folder
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
//this will either use the port that heroku provided or the 5000 to listen on localhost in order to use
//this application. 