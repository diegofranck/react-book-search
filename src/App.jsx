import React from "react";
import ReactDOM from "react-dom";
import BookSearch from "./components/BookSearch";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview.
 */

const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    language: "English",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    language: "Italian",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    language: "English",
    pages: 216,
    title: "Mrs Dalloway",
    year: 1925,
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    language: "English",
    pages: 209,
    title: "To the Lighthouse",
    year: 1927,
  },
];

const App = (props) => {
  return (
    <div id="app">
      <BookSearch books={books} />
    </div>
  );
};

export default App;
