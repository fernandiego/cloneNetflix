const express = require('express')
const listF = express()


listF.get('/', async (req, res) => {
	res.send('get films')
})

exports.listF = listF;