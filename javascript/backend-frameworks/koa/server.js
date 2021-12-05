const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();
const allBooks = require('../../../books.json')
const {getBooksByTitle, port} = require("../helpers");

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

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))