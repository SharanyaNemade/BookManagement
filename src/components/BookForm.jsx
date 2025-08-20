import React, { useState, useContext, useEffect } from "react";
import { BooksContext } from "../context/BookContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookForm = ({ isEdit }) => {
    const { addBook, updateBook } = useContext(BooksContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate(); //  Replaces useHistory
    const { id } = useParams();

    useEffect(() => {
        if (isEdit && id) {
            axios
                .get(`/api/books/${id}`)
                .then((res) => {
                    const { title, author, publicationDate, genre, description } = res.data;
                    setTitle(title);
                    setAuthor(author);
                    setPublicationDate(publicationDate);
                    setGenre(genre);
                    setDescription(description);
                })
                .catch((err) => console.error("Error fetching book:", err));
        }
    }, [isEdit, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, publicationDate, genre, description };

        if (isEdit) {
            axios
                .put(`/api/books/${id}`, newBook)
                .then((res) => {
                    updateBook(res.data);
                    navigate("/"); //  Replaces history.push
                })
                .catch((err) => console.error("Error updating book:", err));
        } else {
            axios
                .post("/api/books", newBook)
                .then((res) => {
                    addBook(res.data);
                    navigate("/"); //  Replaces history.push
                })
                .catch((err) => console.error("Error adding book:", err));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <input
                type="date"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">{isEdit ? "Update Book" : "Add Book"}</button>
        </form>
    );
};

export default BookForm;
