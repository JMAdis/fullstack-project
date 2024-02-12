import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <p>Hello World!</p>
    </Router>
  );
};

export default App;
