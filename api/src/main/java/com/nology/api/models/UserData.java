package com.nology.api.models;
import jakarta.persistence.*;
import org.hibernate.mapping.ToOne;

import java.time.LocalDate;

@Entity
@Table(name = "user_data")
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate dateRead;
    private String review;
    private int score;
    private String format;

    @Column(name = "book_id")
    private long bookId;

    @OneToOne
    @JoinColumn(name = "book_id", insertable = false, updatable = false)
    private Book book;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDateRead() {
        return dateRead;
    }

    public void setDateRead(LocalDate dateRead) {
        this.dateRead = dateRead;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public long getBookId() {
        return bookId;
    }

    public void setBookId(long bookId) {
        this.bookId = bookId;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    @PrePersist
    public void prePersist() {
        if (this.dateRead == null) {
            this.dateRead = LocalDate.now();
        }
    }

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
