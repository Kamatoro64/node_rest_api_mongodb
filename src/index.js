const express = require('express')
const morgan = require('morgan')
const path = require('path')
const personRoute = require('./routes/person')
const app = express();

// app set
app.set('port', process.env.PORT || 4000);

// Middlware

// Writing a custom middleware
app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`)

	// If this is not run it breaks the chain of middleware
	next();
})

app.use(morgan('combined'))
app.use('/api', personRoute)
app.use(express.static('public')); // Interestingly this just serves up index.html whenever localhost:4000 is hit

// Handler for 404
app.use((req, res, next) => {
	res.status(404).send('We think you are lost')
})

// Handler for 500
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.sendFile(path.join(__dirname, '../public/500.html'));
})

app.listen(app.get('port'), () => {
	console.log(`Server is up and listening on port ${app.get('port')}...`);
})
