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
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/")
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        Book newBook = bookService.addBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBook);
    }

    // READ
    @GetMapping("/")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.status(HttpStatus.OK).body(books);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<UserData> getBookInfoById(@PathVariable long id) {
        UserData userData = bookService.getBookInfoById(id);
        return ResponseEntity.status(HttpStatus.OK).body(userData);
    }

    // UPDATE
    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@RequestBody BookInfoDTO bookInfoDTO, @PathVariable long id) {
        Book updatedBook = bookService.updateBookAndUserData(id, bookInfoDTO);
            return ResponseEntity.status(HttpStatus.OK).body(updatedBook);
    }
}


