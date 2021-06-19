const express = require('express')
const listF = express()
const axios = require('axios')
const baseURL = "https://ghibliapi.herokuapp.com"
const api = axios.create({baseURL})


listF.get('/', async (req, res) => {
	const ret = await axios.get("https://ghibliapi.herokuapp.com/films")
	console.log(ret.data)
	res.send(ret.data)
})

// https://ghibliapi.herokuapp.com/films 

exports.listF = listF;