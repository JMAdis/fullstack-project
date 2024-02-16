package com.nology.api;

import com.nology.api.BookInfoDTO;
import com.nology.api.models.Book;
import com.nology.api.models.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    @Autowired
    private BookService bookService;

    @ExceptionHandler
    // Exception handler to return 404 status and exception message
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/")
    // Endpoint to create a new book and user data
    public ResponseEntity<Book> createBookAndUserData(@RequestBody BookInfoDTO bookInfoDTO) {
        Book newBook = bookService.addBookAndUserData(bookInfoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBook);
    }

    // READ
    @GetMapping("/")
    // Endpoint to get all books
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.status(HttpStatus.OK).body(books);
    }

    @GetMapping("/books/{id}")
    // Endpoint to get user data by book ID
    public ResponseEntity<UserData> getBookInfoById(@PathVariable long id) {
        UserData userData = bookService.getBookInfoById(id);
        return ResponseEntity.status(HttpStatus.OK).body(userData);
    }

    // UPDATE
    @PutMapping("/books/{id}")
    // Endpoint to update a book and user data
    public ResponseEntity<Book> updateBook(@RequestBody BookInfoDTO bookInfoDTO, @PathVariable long id) {
        Book updatedBook = bookService.updateBookAndUserData(id, bookInfoDTO);
            return ResponseEntity.status(HttpStatus.OK).body(updatedBook);
    }
}


