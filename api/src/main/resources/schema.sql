DROP DATABASE IF EXISTS books;

CREATE DATABASE books;

USE books;

CREATE TABLE `book_data` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `title` varchar(100),
    `author` varchar(100),
    `category` varchar(20),
    `book_cover` varchar(200),
    `genre` varchar(200),
    PRIMARY KEY(`id`)
);

CREATE TABLE `user_data` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `date_read` date,
    `review` varchar(200),
    `score` int,
    `format` varchar(50),
    `book_id` bigint,
    PRIMARY KEY(`id`),
    FOREIGN KEY (`book_id`) REFERENCES `book_data` (`id`)
);