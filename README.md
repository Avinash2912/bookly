# Bookly

Bookly is a simple Node.js Express application for managing a collection of books. It demonstrates RESTful API design, middleware usage, and logging.

## Features
- List all books
- Get a book by ID
- Add a new book
- Delete a book
- Request logging middleware

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
```bash
npm install
```

### Running the App
```bash
npm start
```
The server will run at `http://localhost:8000` by default.

### API Endpoints
- `GET /books/` — List all books
- `GET /books/:id` — Get a book by ID
- `POST /books/` — Add a new book (JSON body: `{ "title": "Book Title", "author": "Author Name" }`)
- `DELETE /books/delete/:id` — Delete a book by ID

### Logging
- All requests are logged to `logs.txt` (ignored by git).

## Development
- Uses `nodemon` for auto-reloading during development.
- Type definitions for Node.js and Express are included as dev dependencies.

## License
ISC
