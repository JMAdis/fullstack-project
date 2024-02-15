package com.nology.api.repositories;

import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nology.api.models.Book;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name= "book_data")
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByAuthor(String author);

    List<Book> findAllByGenre(String genre);

    List<Book> findByCategory(String category);

    @Modifying
    @Query("UPDATE Book b SET b.bookTitle = :bookTitle, b.author = :author WHERE b.id = :bookId")
    void updateBookData(long bookId, String bookTitle, String author);

}
