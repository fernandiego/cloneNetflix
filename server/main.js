const express = require('express')
const { listF } = require("./routes/listFilms");
const { listP } = require("./routes/listPeople");
const { listL } = require("./routes/listLocations");
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');


app.use(cors())

app.use(bodyParser.json())

app.use(express.static('public'))

//rotas
app.use('/films', listF)
app.use('/people', listP)
app.use('/locations', listL)


app.get('/', async (req, res) => {
	res.send('home dessa marmota')
})

app.listen(process.env.PORT || 1234, () => {
	console.log('We are online, baby!')
})