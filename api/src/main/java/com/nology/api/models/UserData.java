package com.nology.api.models;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "user_data")
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    private LocalDate dateRead;
    private String review;
    private int score;
    private String format;

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", dateRead='" + dateRead + '\'' +
                ", review='" + review + '\'' +
                ", score='" + score + '\'' +
                ", format='" + format + '\'' +
                '}';
    }
}
