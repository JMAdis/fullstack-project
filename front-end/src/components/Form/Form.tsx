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

  // Function to handle form validation and submission
  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if any form field is empty or invalid
    if (Object.values(book).some((value) => {
      if (typeof value === 'string') {
        return value.trim() === "";
      } else if (typeof value === 'number') {
        return isNaN(value);
      } else {
        return !value;
      }
    })) {
      
      // Display an alert if validation fails
      alert("Missing content, unable to proceed");
      return;
    }
    
    // If validation passes, submit the form data
    handleSubmit(book);
  };

  // Function to handle input changes and update the state
  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    
    // Extract the value from the input event
    const value = 
    key === 'dateRead' 
    ? (event.currentTarget.value as string) 
    : event.currentTarget.value;
    
    // Update the state with the new value
    setBook({ ...book, [key]: value === undefined ? '' : value });
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation} id="update-form">
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
            min={0}
          />
          <label htmlFor="Review">Review:</label>
          <input
            id="review"
            type="text"
            placeholder="Enter Review"
            value={book.review}
            onInput={(event) => handleInput(event, "review")}
          />
          <label htmlFor="DateRead">When did you read the book?</label>
          <input
            id="dateRead"
            type="date"
            value={book.dateRead || ""}
            onChange={(event) => handleInput(event, "dateRead")}
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
