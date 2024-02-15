package com.nology.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nology.api.models.Book;
import java.util.List;
import java.util.Date;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByAuthor(String author);

    List<Book> findAllByGenre(String genre);

    List<Book> findByTitleContainingIgnoreCase(String title);

    List<Book> findByCategory(String category);

    List<Book> findByScoreGreaterThanEqual(int minScore);

    List<Book> findByScoreLessThanEqual(int maxScore);

    List<Book> findByDateReadBetween(Date startDate, Date endDate);

    List<Book> findAllByOrderByDateAddedDesc();

    List<Book> findByFormat(String format);

}
