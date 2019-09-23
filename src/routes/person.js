// Routes are essentially mini applications
const express = require('express')
const router = express.Router()

// Not app.get() but router.get()

// Handling query strings => query property of the request object
// localhost:4000/api/person?name=thomas&age=20

router.get('/person', (req, res) => {
	if (req.query.name) {

		res.send(`You have requested a person ${req.query.name}`)
	} else {
		res.send("You have requested a person")
	}

})

// Params property on the request object
// localhost:4000/api/person/thomas
router.get('/person/:name', (req, res) => {
	res.send(`You have requested a person with name ${req.params.name}`)
})

// This allows us to import the router in index.js 
module.exports = router;