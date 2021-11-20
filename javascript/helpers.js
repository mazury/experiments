function getBooksByTitle(books, requestedTitle) {
    return books.filter(book => book.title.toLowerCase().includes(requestedTitle.toLowerCase()));
}

const port = 4000

module.exports = {
    getBooksByTitle,
    port

}