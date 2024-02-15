package com.nology.api;
import com.nology.api.models.Book;
import com.nology.api.models.UserData;

public class BookInfoDTO {
    private Book book;
    private UserData userData;

    public BookInfoDTO(Book book, UserData userData) {
        this.book = book;
        this.userData = userData;
    }

    public Book getBook() {
        return book;
    }

    public UserData getUserData() {
        return userData;
    }
}
