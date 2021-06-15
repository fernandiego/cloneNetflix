import express from 'express'
const app = express()

app.get('/', async (req, res) =>{
    res.send('Olá galeras')
})

app.listen(process.env.PORT || 1234, () => {
	console.log('We are online, baby!')
})