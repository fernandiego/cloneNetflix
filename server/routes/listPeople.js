const express = require('express')
const listP = express()
const axios = require('axios')


listP.get('/', async (req, res) => {
	res.send('get listpeople')
})

exports.listP = listP;