const express = require('express')
const { listF } = require("./routes/listFilms");
const { listP } = require("./routes/listPeople");
const { listL } = require("./routes/listLocations");
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/listfilms', listF)
app.use('/listpeople', listP)
app.use('/listlocations', listL)

app.get('/', async (req, res) => {
	res.send('home dessa marmota')
})

app.listen(process.env.PORT || 1234, () => {
	console.log('We are online, baby!')
})