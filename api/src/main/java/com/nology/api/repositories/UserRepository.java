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

    UserData findByBookId(Long bookId);

    // List<UserData> findByScoreGreaterThanEqual(int minScore);

    //List<UserData> findByScoreLessThanEqual(int maxScore);

    //List<UserData> findByDateReadBetween(Date startDate, Date endDate);

    //List<UserData> findAllByOrderByDateAddedDesc();

}
