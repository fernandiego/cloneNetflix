const express = require('express')
const listP = express()
const {api} = require('../apighibli')


listP.get('/', async (req, res) => {
	const ret = await api.getPeople()
	console.log(ret.data)
	res.send(ret.data)
})

exports.listP = listP;