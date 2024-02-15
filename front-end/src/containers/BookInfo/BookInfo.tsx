import "./BookInfo.scss";
import { ReactNode, useEffect, useState } from "react";
import BookRequest from "../../types/BookRequest";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";

const getFormBook = (book: BookRequest) => {
  return {
    id: book.id,
    bookTitle: book.bookTitle,
    author: book.author,
    category: book.category,
    bookCover: book.bookCover,
    genre: book.genre,
    score: book.score,
    review: book.review,
    date: book.date,
    format: book.format,
  };
};

const BookInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const [bookData, setBookData] = useState<{
    dateRead: ReactNode;
    format: ReactNode;
    review: ReactNode;
    score: ReactNode;
    book: BookRequest;
    userData: any; 
  } | null>(null);
  const [showForm, setShowForm] = useState(false);

  const getBookAndUserData = async (id: number) => {
      const url = `http://localhost:8080/books/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setBookData(data);
      console.log(data);
      console.log(data['dateRead'])
  };

  useEffect(() => {
    if (location.state) {
      setBookData(location.state.book);
    } else {
      getBookAndUserData(Number(id));
    }
  }, [id, location]);

  const handleUpdateBook = async (updatedBook: BookRequest) => {
    const result = await fetch(`http://localhost:8080/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });

    if (result.ok) {
      alert("Book info updated");
      const updated = await result.json();
      setBookData((updated));
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!bookData) {
    console.log("error on line 78");
    return null;
  }

  const { book } = bookData; 

  const formBook: BookRequest | null = bookData?.book ? getFormBook(bookData.book) : null;

  return (
    <section className="book-info">
      <h2 className="book-info__title">{book.bookTitle} by {book.author}</h2>
      <div className="book-info__content">
        <img className="book-info__img" src={book.bookCover} alt={`${book.bookTitle} by ${book.author}`}   />
        <div>
        <p><strong>Date Read: </strong>{bookData.dateRead}</p>
          <p><strong>Category: </strong>{bookData.book.category}</p>
          <p><strong>Genre: </strong> {bookData.book.genre}</p>
          <p><strong>Format: </strong> {bookData.format}</p>
          <p><strong>Review: </strong>{bookData.review}</p>
          <p><strong>Score: </strong>{bookData.score} / 10</p>
        
        <div className="book-info__buttons">
          <button
            className={
              showForm
                ? "book-info__button"
                : "book-info__button book-info__button--secondary"
            }
            onClick={handleShowForm} 
          >
            Update
          </button>
        </div>
        </div>
      </div>
      {showForm && formBook && (
        <Form
          defaultFormState={formBook}
          formTitle="Update book info"
          handleSubmit={handleUpdateBook}
        />
      )}
    </section>
  );
};

export default BookInfo;
