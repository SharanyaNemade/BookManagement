import React from 'react';
import BookForm from '../components/BookForm';

const EditBookPage = () => {
    return (
        <div>
            <h1>Edit Book</h1>
            <BookForm isEdit={true} />
        </div>
    );
};

export default EditBookPage;
