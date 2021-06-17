const express = require('express')
const listF = express()
const axios = require('axios')
const request = require('request')

const baseURL = "https://ghibliapi.herokuapp.com/films"

request(`${baseURL}`, async (req, res, body) => {
let ret = body.json()	
console.log(ret)
res.send(ret)
})

exports.listF = listF;