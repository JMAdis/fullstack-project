DROP DATABASE IF EXISTS books;

CREATE DATABASE books;

USE books;

CREATE TABLE book_data (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    author VARCHAR(100),
    category VARCHAR(20),
    book_cover VARCHAR(200),
    genre VARCHAR(200),
    PRIMARY KEY(id)
);

CREATE TABLE user_data (
    id INT NOT NULL AUTO_INCREMENT,
    date_read DATE DEFAULT NOW(),
    review VARCHAR(200),
    score INT,
    format VARCHAR(50),
    book_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (book_id) REFERENCES book_data(id)
);

INSERT INTO book_data ( title, author, category, book_cover, genre)
VALUES
    ('Tell-Tale Hearts', 'H.A. Blackwood', 'Fiction', 'xxx', 'Romance'),
    ('Viciously Yours', 'Jamie Applegate Hunter', 'Fiction', 'xxx', 'Romance'),
    ('Midnight in the Wychwood', 'Alethea Rayne', 'Fiction', 'xxx', 'Romance'),
    ("Deaths Obsession's", 'Avina St. Graves', 'Fiction', 'xxx', 'Romance'),
    ('Hans', 'S.J. Tilly', 'Fiction', 'xxx', 'Romance'),
    ('Healer to the Ash King', 'Rebecca F. Kenney', 'Fiction', 'xxx', 'Romance'),
    ('Jailer to the Death God', 'Rebecca F. Kenney', 'Fiction', 'xxx', 'Romance'),
    ('Captive to the Pirate King', 'Rebecca F. Kenney', 'Fiction', 'xxx', 'Romance'),
    ('The Unbound Witch', 'Miranda Lyn', 'Fiction', 'xxx', 'Romance'),
    ('The Unmarked Witch', 'Miranda Lyn', 'Fiction', 'xxx', 'Romance'),
    ('The Sea Witch', 'Rebecca F. Kenney', 'Fiction', 'xxx', 'Romance'),
    ('To Hunt a Demon King', 'Madeleine Eliot', 'Fiction', 'xxx', 'Romance'),
	('To Break a Demon Curse', 'Madeleine Eliot', 'Fiction', 'xxx', 'Romance'),
    ('To Wear a Demon Crown', 'Madeleine Eliot', 'Fiction', 'xxx', 'Romance'),
    ('Stalked by Seduction and Shadows', 'Maggie Sunseri', 'Fiction', 'xxx', 'Romance'),
    ('The Maleficent Faerie', 'Rebecca F. Kenney', 'Fiction', 'xxx', 'Romance');

INSERT INTO user_data (date_read, review, score, format, book_id)
VALUES 
	('2024-01-27', 'Would read again', 8, 'e-book', 1),
    ('2024-01-28', 'good book', 7, 'e-book', 2),
    ('2024-01-29', 'okay book', 5, 'e-book', 3),
    ('2024-01-30', 'good book', 7, 'e-book', 4),
    ('2024-01-31', 'okay/good book', 6, 'e-book', 5),
    ('2024-02-01', 'Great book', 9, 'e-book', 6),
    ('2024-02-02', 'Would read again', 8, 'e-book', 7),
	('2024-02-03', 'Would read again', 8, 'e-book', 8),
    ('2024-02-04', 'I enjoyed this series', 8, 'e-book', 9),
    ('2024-02-05', 'I enjoyed this series', 8, 'e-book', 10),
    ('2024-02-06', 'Okay book', 6, 'e-book', 11),
    ('2024-02-07', 'Would read again', 8, 'e-book', 12),
    ('2024-02-08', 'I enjoyed this series', 8, 'e-book', 13),
    ('2024-02-09', 'I enjoyed this series', 8, 'e-book', 14),
    ('2024-02-12', 'okay book', 7, 'e-book', 15),
    ('2024-02-13', 'Okay book', 7, 'e-book', 16);
    
SELECT * from book_data;
SELECT * FROM user_data;

UPDATE user_data
SET date_read = DATE(date_read)
WHERE id > 0;

ALTER TABLE user_data
MODIFY COLUMN date_read DATE;

UPDATE book_data
SET book_cover = 'https://m.media-amazon.com/images/I/51r1mm385KL.jpg'
WHERE id = 16;

UPDATE user_data
SET book_id = 16
WHERE date_read = '2024-02-13' AND id=16;

Select * from user_data;

SELECT * FROM book_data
INNER JOIN user_data ON book_data.id = user_data.book_id
ORDER BY user_data.date_read;

INSERT INTO book_data ( title, author, category, book_cover, genre)
VALUES
	("The Nameless Trickster", "Rebecca F. Kenney", "Fiction", 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701139150i/202772890.jpg', "Romance");

INSERT INTO user_data (date_read, review, score, format, book_id)
VALUES 
	('2024-02-10', 'okay book', 6, 'e-book', 17);