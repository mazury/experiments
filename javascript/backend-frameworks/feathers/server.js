import config from './config.js'
import allBooks from './books.js'
import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'

function getBooksByTitle(books, requestedTitle) {
    return books.filter(book => book.title.toLowerCase().includes(requestedTitle.toLowerCase()));
}

class BookService {
    constructor() {
        this.books = allBooks;
    }

    async find() {
        return this.books;
    }

    async find(params) {
        return getBooksByTitle(this.books, params.query.title)
    }

    async create(data) {
        const book = {
            title: data.title,
            author: data.author
        }

        this.books.push(book);

        return book;
    }
}

const server = express(feathers());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.configure(express.rest());
server.use('/books', new BookService());
server.use(express.errorHandler());

server.listen(config.port).on('listening', () =>
    console.log('Feathers server listening on localhost:3030')
);
