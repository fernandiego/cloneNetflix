const axios = require('axios')
const api = axios.create(
    {
        baseUrl = 'https://ghibliapi.herokuapp.com'
    }
)

const studioGhibliFilms = {
    listfilms: _ => api.get('/films')
}
const studioGhibliFilmsId = {
    listfilms: _ => api.get(`/films/${id}`)
}
const studioGhibliPeople = {
    listfilms: _ => api.get('/people')
}
const studioGhibliPeopleId = {
    listfilms: _ => api.get(`/people/${id}`)
}
const studioGhibliLocations = {
    listfilms: _ => api.get('/locations')
}

module.exports = {
    studioGhibliFilms,
    studioGhibliFilmsId,
    studioGhibliPeople,
    studioGhibliPeopleId,
    studioGhibliLocations
}