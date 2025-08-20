import React from 'react';
import BookForm from '../components/BookForm';

const AddBookPage = () => {
    return (
        <div>
            <h1>Add New Book</h1>
            <BookForm isEdit={false} />
        </div>
    );
};

export default AddBookPage;
