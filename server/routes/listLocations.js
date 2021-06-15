const express = require('express')
const listL = express()
const axios = require('axios')


listL.get('/', async (req, res) => {
	res.send('get listlocations')
})

exports.listL = listL;