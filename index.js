const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

// Configuring the application
app.engine('.hbs', handlebars({
  defaultLayout: 'main',
  extname: '.hbs',
  //layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'))

const port = 3000;
const path = require('path');

// Middleware

// use this one
// app.use((request, response, next) => {
//   	console.log(request.headers);
// 	next();
// });

// app.use((request, response, next) => {
//   	request.chance = Math.random();
//   	next();
// });

// Error handlers should be last? What about multiples? Does this really matter? Or is it because we want to handle errors last of all?
app.use((err, request, response, next) => {
  	// log the error, for now just console.log
  	console.log(err);
  	response.status(500).send('There was a problem.');
});

// console.log(`Server is listening on ` + port);

app.get('/', (request, response) => {
	// This snippet is for if you don't have any HTML to send
  	//response.send('Welcome to your Express site!');
  	// This snippet is for if you have static (not in need of rendering) HTML to send
  	//response.sendFile(path.join(__dirname + '/views/home.html'));
  	// This snippet renders HTML from the specified location
  	response.render('home', {port: port});
});

app.listen(port, (err) => {
  	if (err) {
    return console.log('There was a problem', err);
	}
});













