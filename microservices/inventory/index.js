import config from './config.js'
import express from 'express'
import axios from 'axios'

const app = express()

app.get('/ping-payments', async (req, res) => {
    const { data }= await axios('http://localhost:3001/ping')
    console.log(data)
    res.send('ok')
})

app.listen(config.port, () => {
    console.log(`Service inventory listening at http://localhost:${config.port}`)
})