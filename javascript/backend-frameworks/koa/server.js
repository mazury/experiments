const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();
const allBooks = require('./books.js')
const config = require('./config')

function getBooksByTitle(books, requestedTitle) {
    return books.filter(book => book.title.toLowerCase().includes(requestedTitle.toLowerCase()));
}

app.use(koaBody());

router
    .get('/books', ctx => {
        const requestedTitle = ctx.query.title
        ctx.body = requestedTitle ? getBooksByTitle(allBooks, requestedTitle) : allBooks
    })

    .post('/book', ctx => {
        const book = ctx.request.body
        allBooks.push(book)
        ctx.body = book
    })

app.use(router.routes())

app.listen(config.port, () => console.log(`Server listening at http://localhost:${config.port}`))