import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import PlaceholderImage from "./assets/book cover placeholder.png"

const App = () => {
  return (
    <Router>
      <Nav />
      <p>Hello World!</p>
      <Carousel images={PlaceholderImage} />
    </Router>
  );
};

export default App;
