package com.nology.api;

import com.nology.api.models.UserData;
import com.nology.api.repositories.BookRepository;
import com.nology.api.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import com.nology.api.models.Book;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    // CREATE

    @Transactional
    @Modifying
    public Book addBookAndUserData(BookInfoDTO bookInfoDTO) {
        Book newBook = addBook(bookInfoDTO.getBook());

        addUser(bookInfoDTO.getUserData(), newBook.getId());

        return newBook;
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public UserData addUser(UserData userData, Long id) {
        return userRepository.save(userData);
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
        return userRepository.findById(id).orElse(null);
    }

    // UPDATE
    @Transactional
    @Modifying
    public Book updateBookAndUserData(long bookId, BookInfoDTO bookInfoDTO) {
        Book bookToUpdate = bookRepository.findById(bookId)
                .orElseThrow(()
                        -> new EntityNotFoundException("Book not found with id:" + bookId));

        updateBookData(bookToUpdate, bookInfoDTO.getBook());
        updateUserData(bookInfoDTO.getUserData(), bookId);

        return bookRepository.save(bookToUpdate);
    }

    private void updateBookData(Book bookToUpdate, Book updatedBook) {
        bookToUpdate.setBookTitle(updatedBook.getBookTitle());
        bookToUpdate.setAuthor(updatedBook.getAuthor());
    }

    private void updateUserData(UserData userData, long bookId) {
        UserData existingUserData = userRepository.findByBookId(bookId);

        if (existingUserData != null) {
            existingUserData.setDateRead(userData.getDateRead());
            existingUserData.setReview(userData.getReview());
            existingUserData.setScore(userData.getScore());
            userRepository.save(existingUserData);
        }
    }
}

