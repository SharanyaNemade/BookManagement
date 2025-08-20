package com.example.bookapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookapp.entity.Book;
import com.example.bookapp.entity.User;
import com.example.bookapp.repository.BookRepository;
import com.example.bookapp.repository.UserRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    public Book addBook(Book book, String username) {
        User user = userRepository.findByUsername(username);
        book.setUser(user);
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
    }

    public Book updateBook(Long id, Book updatedBook, String username) {
        Book book = getBookById(id);
        if(!book.getUser().getUsername().equals(username)) {
            throw new RuntimeException("Not authorized");
        }
        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        book.setGenre(updatedBook.getGenre());
        book.setPublicationDate(updatedBook.getPublicationDate());
        book.setDescription(updatedBook.getDescription());
        return bookRepository.save(book);
    }

    public void deleteBook(Long id, String username) {
        Book book = getBookById(id);
        if(!book.getUser().getUsername().equals(username)) {
            throw new RuntimeException("Not authorized");
        }
        bookRepository.delete(book);
    }
}
