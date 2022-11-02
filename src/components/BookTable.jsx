import React from "react";

import "./BookTable.scss";

const BookTableHeader = () => {
  return (
    <header>
      <span>Author</span>
      <span>Title</span>
      <span>Country</span>
      <span>Language</span>
      <span>Pages</span>
      <span>Year</span>
    </header>
  );
};


const BookTableRow = ({ book }) => {
  // Inside the render, it was possible to use Object.keys(book), instead of creating an array of keys,
  // to get each key, but we need to render the fields in this specific order
  
  return (
    <div data-testid="book" className="row">
      {["author", "title", "country", "language", "pages", "year"].map(key => (
        <span>{book[key]}</span>
      ))}
    </div>
  );
};

const BookTable = ({ books }) => {
  return (
    <div className="table">
      {books.map((book, index)=> (
        <>
          {!index ? (
            <BookTableHeader />
          ): null}
          <BookTableRow book={book} />
        </>
      ))}
    </div>
  );
};

export default BookTable;