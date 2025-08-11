const {books} = require('../models/index'); 


exports.getAllBooks = (req, res) => {
    res.json(books);
};


exports.getBookById =(req, res) => {
    if (isNaN(req.params.id)) {
        return res.status(400).send({'message': 'ID must be a number'});
    }
    const book = books.find(book => book.id === parseInt(req.params.id));
    if (!book) return res.status(404).send({'message': 'Book with this ID does not exist'});
    res.json(book);
};

exports.CreateBook=(req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).send({'message': 'Title and Author are required'});
    }
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json(newBook);
};


exports.DeleteBookById = (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID must be a number' });
    }

    const bookIndex = books.findIndex(book => book.id === Number(id));
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book with this ID does not exist' });
    }

    books.splice(bookIndex, 1);
    res.status(200).json({ message: 'Book deleted successfully' });
};
