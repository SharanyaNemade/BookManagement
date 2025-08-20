import React, { useContext } from 'react';
import { BooksContext } from '../context/BookContext';
import { Link } from 'react-router-dom';

const BookList = () => {
    const { books } = useContext(BooksContext);

    // Handle if books is undefined, null, or not an array
    if (!Array.isArray(books)) {
        return <p>Loading books...</p>;
    }

    return (
        <div>
            <h1>Book List</h1>
            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}>{book.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
