const express = require('express');
const booksRouter = require('./routes/books.route');
const {loggerMiddleware} = require('./middlewares/logger');


const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use('/books', booksRouter);







app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});






















































app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
