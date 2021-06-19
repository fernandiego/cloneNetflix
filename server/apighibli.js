const axios = require('axios')
const baseURL = "https://ghibliapi.herokuapp.com"
const api = axios.create({baseURL})


api.getFilms = () => api.get('/films')
api.getPeople = () => api.get('/people')
api.getPeople = () => api.get('/locations')

module.exports = {api}