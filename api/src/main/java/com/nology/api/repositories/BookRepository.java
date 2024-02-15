package com.nology.api.repositories;

import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import com.nology.api.models.Book;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Date;

@Table(name= "book_data")
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByAuthor(String author);

    List<Book> findAllByGenre(String genre);

    List<Book> findByTitleContainingIgnoreCase(String title);

    List<Book> findByCategory(String category);



}
