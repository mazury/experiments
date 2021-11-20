const allBooks = require('../../books.json')
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const {getBooksByTitle, port} = require("../helpers");

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

server.listen(port).on('listening', () =>
    console.log('Feathers server listening on localhost:3030')
);
