const express = require('express')
const listF = express()
const axios = require('axios')


listF.get('/', async (req, res) => {
	res.send('get listfilms')
})

exports.listF = listF;