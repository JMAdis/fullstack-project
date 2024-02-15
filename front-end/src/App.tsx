import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookRequest from "./types/BookRequest";
import Home from "./containers/Home/Home";
import { useEffect, useState } from "react";
import BookInfo from "./containers/BookInfo/BookInfo";

const App = () => {
  const [books, setBooks] = useState<BookRequest[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleBookFormSubmit = async (newBook: BookRequest) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home books={books} onBookFormSubmit={handleBookFormSubmit} />
          }
        />
        <Route path="/books/:id" element={<BookInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
