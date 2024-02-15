import "./Book.scss";
import { Link } from "react-router-dom";
import BookRequest from "../../types/BookRequest";

type BookProps = {
  book: BookRequest
};

const Book = ({ book }: BookProps) => {
    const {id, bookCover, bookTitle} = book;

  return (
    <Link to={`/books/${id}`}>
      <img className="book-cover" src={bookCover} alt={`${bookTitle}`} />
    </Link>
  );
};

export default Book;
