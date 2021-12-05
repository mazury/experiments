import config from './config.js'
import allBooks from './books.js'
import express from 'express'
const app = express()

function getBooksByTitle(books, requestedTitle) {
    return books.filter(book => book.title.toLowerCase().includes(requestedTitle.toLowerCase()));
}

app.use(express.json())

app.get('/books', (req, res) => {
    const requestedTitle = req.query.title
    const books = requestedTitle ? getBooksByTitle(allBooks, requestedTitle) : allBooks
    res.send(books)
})

app.post('/book', (req, res) => {
    allBooks.push(req.body)
    res.send(book)
})

app.listen(config.port, () => {
    console.log(`Server listening at http://localhost:${config.port}`)
})