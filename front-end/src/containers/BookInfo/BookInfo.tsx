import { useEffect, useState } from "react";
import BookRequest from "../../types/BookRequest";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./BookInfo.scss";

const getFormBook = (book: BookRequest, bookData: any) => {
  const { score, review, dateRead, format } = bookData;
  return {
    id: book.id,
    bookTitle: book.bookTitle,
    author: book.author,
    category: book.category,
    bookCover: book.bookCover,
    genre: book.genre,
    score,
    review,
    dateRead,
    format,
  };
};

const BookInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const getBookAndUserData = async (id: number) => {
    const url = `http://localhost:8080/books/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setBookData(data);
  };

  useEffect(() => {
    if (location.state) {
      setBookData(location.state.book);
    } else {
      getBookAndUserData(Number(id));
    }
  }, [id, location]);

  const handleUpdateBook = async (updatedBook: BookRequest) => {
    const updatedUserData = {
      dateRead: updatedBook.dateRead,
      review: updatedBook.review,
      score: updatedBook.score,
      format: updatedBook.format,
    };

    const updatedData = {
      book: { ...updatedBook },
      userData: updatedUserData,
    };

    const result = await fetch(`http://localhost:8080/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (result.ok) {
      alert("Book info updated");
      const updated = await result.json();
      setBookData(updated);
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);

    setTimeout(() => {
      const formElement = document.getElementById("update-form")
      console.log(formElement)
      if (formElement) {
        formElement.scrollIntoView({behavior: "smooth"});
      } else {
        console.error("Element with ID 'update-form' not found");
      }
    }, 0)
  };

  if (!bookData) {
    console.error("error");
    return null;
  }

  const { book } = bookData;
  const { score, review, dateRead, format } = bookData;

  const formBook = getFormBook(book, { score, review, dateRead, format });

  return (
    <section className="book-info">
      <h2 className="book-info__title">
        {book.bookTitle} by {book.author}
      </h2>
      <div className="book-info__content">
        <img
          className="book-info__img"
          src={book.bookCover}
          alt={`${book.bookTitle} by ${book.author}`}
        />
        <div>
          <p>
            <strong>Category: </strong>
            {book.category}
          </p>
          <p>
            <strong>Genre: </strong> {book.genre}
          </p>
          <p>
            <strong>Score: </strong>
            {score} / 10
          </p>
          <p>
            <strong>Review: </strong>
            {review}
          </p>
          <p>
            <strong>Date Read: </strong>
            {dateRead}
          </p>
          <p>
            <strong>Format: </strong> {format}
          </p>
          <div className="book-info__buttons">
            <button
              className={`book-info__button ${
                showForm ? "" : "book-info__button--secondary"
              }`}
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
