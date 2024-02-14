import { useEffect, useState } from "react";
import BookRequest from "../../types/BookRequest";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import Book from "../../components/Book/Book";

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
  const navigate = useNavigate();
  const [book, setBook] = useState<BookRequest | null>(null);
  const [showForm, setShowForm] = useState(false);

  const getBookById = async (id: number) => {
    const url = `http://localhost:8080/book/${id}`;
    const response = await fetch(url);
    const bookData = await response.json();
    setBook(bookData);
  };

  useEffect(() => {
    if (location.state) {
      setBook(location.state);
    } else {
      getBookById(Number(id));
    }
  }, [id, location]);

  const handleUpdateBook = async (updatedBook: BookRequest) => {
    const result = await fetch(`http://localhost:8080/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });

    if (result.ok) {
      alert("Book info updated");
      const updated = await result.json();
      setBook(updated);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!book) return null; // You can replace this with any fallback content or nothing at all.

  const formBook: BookRequest | null = book ? getFormBook(book) : null;

  return (
    <section className="book-info">
      <h2 className="book-info__title">Book Information</h2>
      <div className="book-info__content">
        <Book book={book} />
        <img src={book.bookCover} alt={book.bookTitle} />
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
