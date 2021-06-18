const express = require('express')
const listL = express()
const axios = require('axios')


listL.get('/', async (req, res) => {
	res.send('get locations')
})

exports.listL = listL;