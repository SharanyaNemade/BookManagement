// src/context/BookContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Named export
export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/books")
            .then((res) => setBooks(res.data))
            .catch((err) => console.error(err));
    }, []);

    const addBook = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    const updateBook = (updatedBook) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === updatedBook.id ? updatedBook : book
            )
        );
    };

    const deleteBook = (bookId) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
    };

    return (
        <BooksContext.Provider
            value={{ books, addBook, updateBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    );
};

// Default export (so you can import without braces if you prefer)
export default BooksProvider;
