import { useEffect, useState } from "react";
import BookRequest from "../../types/BookRequest";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./BookInfo.scss";

// Helper function to extract relevant data for the form
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

  // State to manage book data and form visibility
  const [bookData, setBookData] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  // Function to fetch book and user data based on the ID
  const getBookAndUserData = async (id: number) => {
    const url = `http://localhost:8080/books/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setBookData(data);
  };

  // useEffect to fetch data when component mounts or when ID or location changes
  useEffect(() => {
    if (location.state) {
      setBookData(location.state.book);
    } else {
      getBookAndUserData(Number(id));
    }
  }, [id, location]);

  // Function to handle book update and submission
  const handleUpdateBook = async (updatedBook: BookRequest) => {
    const updatedUserData = {
      dateRead: updatedBook.dateRead,
      review: updatedBook.review,
      score: updatedBook.score,
      format: updatedBook.format,
    };

    // Create the updated data object to be sent in the PUT request
    const updatedData = {
      book: { ...updatedBook },
      userData: updatedUserData,
    };

    // Make the PUT request to update the book info
    const result = await fetch(`http://localhost:8080/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    //Handling the response - alerting on success or error
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

  // Function to toggle form visibility and scroll to form on show
  const handleShowForm = () => {
    setShowForm(!showForm);

    setTimeout(() => {
      const formElement = document.getElementById("update-form");
      console.log(formElement);
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Element with ID 'update-form' not found");
      }
    }, 0);
  };

  // If no book data is available, log an error and return null
  if (!bookData) {
    console.error("error");
    return null;
  }

  // Destructure book and user data from the bookData object
  const { book } = bookData;
  const { score, review, dateRead, format } = bookData;

  // Extract relevant data for the form from the book and user data
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
