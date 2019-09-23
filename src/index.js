const express = require('express')
const morgan = require('morgan')
const personRoute = require('./routes/person')
const app = express();

// app set
app.set('port', process.env.PORT || 4000);

// Middlware


app.use(morgan('combined'))
app.use('/api', personRoute)
app.use(express.static('public')); // Interestingly this just serves up index.html whenever localhost:4000 is hit

app.listen(app.get('port'), () => {
	console.log(`Server is up and listening on port ${app.get('port')}...`);
})
