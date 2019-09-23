const express = require('express')
const morgan = require('morgan')

const app = express();

// app set
app.set('port', process.env.PORT || 4000);

// Middlware
app.use(morgan('combined'))


app.listen(app.get('port'), () => {
	console.log(`Server is up and listening on port ${app.get('port')}...`);
})
