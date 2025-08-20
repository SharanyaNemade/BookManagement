import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/books/${id}`) // use proxy if configured
            .then(res => setBook(res.data))
            .catch(err => console.error("Error fetching book:", err));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Publication Date:</strong> 
                {book.publicationDate 
                    ? new Date(book.publicationDate).toLocaleDateString() 
                    : "N/A"}
            </p>
            <p><strong>Genre:</strong> {book.genre || "N/A"}</p>
            <p><strong>Description:</strong> {book.description}</p>
        </div>
    );
};

export default BookDetails;
