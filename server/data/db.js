const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
    getAllBooks: async(condition = null) => condition === null ? await Book.find() : await Book.find(condition),
    getBookById: async id => await Book.findById(id),
    getAllAuthors: async() => await Author.find(),
    getAuthorById: async id => await Author.findById(id),
    createAuthor: async args => {
        const newAuthor = new Author(args)
        return await newAuthor.save()
    },
    createBook: async args => {
        const newBook = new Book(args)
        return await newBook.save()
    },
    updateBook: async args => {
        const updatedBook = Book
        return await updatedBook.findByIdAndUpdate(args.id, args)
    },
    deleteBook: async args => {
        const deletedBook = Book
        return await deletedBook.findByIdAndDelete(args.id, args)
    }

}

module.exports = mongoDataMethods