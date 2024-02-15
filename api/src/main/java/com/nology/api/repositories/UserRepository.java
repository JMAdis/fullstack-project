package com.nology.api.repositories;

import com.nology.api.models.Book;
import com.nology.api.models.UserData;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Table(name= "user_data")
@Repository
public interface UserRepository extends JpaRepository<UserData, Long> {

    List<Book> findByScoreGreaterThanEqual(int minScore);

    List<Book> findByScoreLessThanEqual(int maxScore);

    List<Book> findByDateReadBetween(Date startDate, Date endDate);

    List<Book> findAllByOrderByDateAddedDesc();

}
