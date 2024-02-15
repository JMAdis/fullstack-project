import "./Form.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import BookRequest from "../../types/BookRequest";

type FormProps = {
  defaultFormState: BookRequest;
  formTitle: string;
  handleSubmit: (title: BookRequest) => void;
};

const Form = ({ defaultFormState, formTitle, handleSubmit }: FormProps) => {
  const [book, setBook] = useState<BookRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(book).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(book);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    
    /*
    let value: string | Date = event.currentTarget.value;

    if (key === "score") {
      value = String(Math.min(10, Math.max(0, parseInt(value as string, 10))));
    } else if (key === "date") {
      value = (event.currentTarget as HTMLInputElement).valueAsDate || null;
    }
    */
    setBook({ ...book, [key]: event.currentTarget.value });
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <div className="form_container__left">
        <label htmlFor="Title">Title:</label>
          <input
            id="bookTitle"
            type="text"
            placeholder="Enter Title"
            value={book.bookTitle}
            onInput={(event) => handleInput(event, "bookTitle")}
          /> 
          <label htmlFor="Author">Author:</label>
          <input
            id="author"
            type="text"
            placeholder="Enter Author"
            value={book.author}
            onInput={(event) => handleInput(event, "author")}
          />
          <label htmlFor="Category">Category:</label>
          <input
            id="category"
            type="text"
            placeholder="Enter Category"
            value={book.category}
            onInput={(event) => handleInput(event, "category")}
          />
          <label htmlFor="BookCover">Book Cover:</label>
          <input
            id="bookCover"
            type="text"
            placeholder="Enter URL"
            value={book.bookCover}
            onInput={(event) => handleInput(event, "bookCover")}
          />
          <label htmlFor="Genre">Genre:</label>
          <input
            id="genre"
            type="text"
            placeholder="Enter Genre"
            value={book.genre}
            onInput={(event) => handleInput(event, "genre")}
          />
        </div>
        <div className="form-container__right">
        <label htmlFor="Score">Score:</label>
          <input
            id="score"
            type="number"
            placeholder="Enter Score"
            value={book.score}
            onChange={(event) => handleInput(event, "score")}
            max={10}
          />
          <label htmlFor="Review">Review:</label>
          <input
            id="review"
            type="text"
            placeholder="Enter Review"
            value={book.review}
            onInput={(event) => handleInput(event, "review")}
          />
          <label htmlFor="Date">When did you read the book?</label>
          <input
            id="date"
            type="date"
            placeholder="Enter Date"
            value={book.date || ""}
            onChange={(event) => handleInput(event, "date")}
          />
          <label htmlFor="Format">Format:</label>
          <input
            id="format"
            type="text"
            placeholder="Enter Format"
            value={book.format}
            onInput={(event) => handleInput(event, "format")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
