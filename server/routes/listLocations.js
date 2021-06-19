const express = require('express')
const listL = express()
const {api} = require('../apighibli')


listL.get('/', async (req, res) => {
	const ret = await api.getLocations()
	console.log(ret.data)
	res.send(ret.data)
})

exports.listL = listL;