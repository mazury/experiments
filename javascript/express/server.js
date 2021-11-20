const express = require('express')
const app = express()
const allBooks = require('../../books.json')
const {getBooksByTitle, port} = require("../helpers");

app.use(express.json())

app.get('/books', (req, res) => {
    const requestedTitle = req.query.title
    const books = requestedTitle ? getBooksByTitle(allBooks, requestedTitle) : allBooks
    res.send(books)
})

app.post('/book', (req,res) => {
    allBooks.push(req.body)
    res.send(book)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})