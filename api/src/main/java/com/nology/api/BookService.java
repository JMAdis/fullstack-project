package com.nology.api;

import com.nology.api.BookInfoDTO;
import com.nology.api.models.UserData;
import com.nology.api.repositories.BookRepository;
import com.nology.api.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import com.nology.api.models.Book;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    // CREATE
    public Book addBook(Book book) {
        return bookRepository.save(book);
    }



    // READ

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(long id) {
        return bookRepository.findById(id)
                .orElseThrow(()
                -> new EntityNotFoundException("Book Not Found"));
    }

    public UserData getBookInfoById(long id) {
        //Optional<Book> optionalBook = bookRepository.findById(id);
        //Book book = optionalBook.orElseThrow(() -> new EntityNotFoundException("Book Not Found"));

        Optional<UserData> optionalUserData = userRepository.findById(id);
        UserData userData = optionalUserData.orElse(null);

        return userData;
    }

    // UPDATE
    @Modifying
    public Book updateBook(Book updatedBook, long id) {
        if (!bookRepository.existsById(id)) {
            throw new EntityNotFoundException("Book Not Found");
        }
        return bookRepository.save(updatedBook);
    }
}
