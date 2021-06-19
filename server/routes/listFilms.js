const express = require('express')
const listF = express()
const {api} = require('../apighibli')


listF.get('/', async (req, res) => {
	const ret = await api.getFilms()
	console.log(ret.data)
	res.send(ret.data)
})

// https://ghibliapi.herokuapp.com/films 

exports.listF = listF;