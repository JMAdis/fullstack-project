package com.nology.api.models;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "book_data")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String category;
    private String bookCover;
    private String genre;


    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", category='" + category + '\'' +
                ", bookCover='" + bookCover + '\'' +
                ", genre='" + genre + '\'' +
                '}';
    }
}
