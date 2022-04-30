import config from './config.js'
import express from 'express'

const app = express()

app.get('/ping', (req, res) => {
    console.log('Pinged')
    res.send('pong from payments')
})

app.listen(config.port, () => {
    console.log(`Payments service listening at http://localhost:${config.port}`)
})