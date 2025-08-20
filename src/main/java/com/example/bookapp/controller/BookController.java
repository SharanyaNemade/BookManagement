package com.example.bookapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookapp.entity.Book;
import com.example.bookapp.service.BookService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PostMapping
    public Book addBook(@RequestBody Book book, HttpSession session) {
        String username = (String) session.getAttribute("username");
        return bookService.addBook(book, username);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book, HttpSession session) {
        String username = (String) session.getAttribute("username");
        return bookService.updateBook(id, book, username);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id, HttpSession session) {
        String username = (String) session.getAttribute("username");
        bookService.deleteBook(id, username);
    }
}
