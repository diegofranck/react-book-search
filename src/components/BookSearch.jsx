import React, { useState, useMemo } from "react";

import BookTable from "./BookTable";
import "./BookSearch.scss";

const isStringInProperty =  (property, textQuery) => {
  return property.toString().trim().toLowerCase().includes(textQuery.toString().trim().toLowerCase());
}

const BookSearch = ({ books }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState(0);
  
  const filteredBooks = useMemo(() => {
    return books.filter((it) => {
      return (
        (!author || (author && isStringInProperty(it.author, author))) &&
        (!title || (title && isStringInProperty(it.title, title))) &&
        (!country || (country && isStringInProperty(it.country, country))) &&
        (!language || (language && isStringInProperty(it.language, language))) &&
        (!year || (year && isStringInProperty(it.year, year)))
      );
    });
  }, [author, title, country, language, year]);
  
  
  return (
    <div className="search">
      <div className="inputs">
        <label hmtlFor="author">
          <span>Author</span>
          <input data-testid="author" onChange={(e) => setAuthor(e.target.value)} />
        </label>
        
        <label hmtlFor="title">
          <span>Title</span>
          <input data-testid="title" onChange={(e) => setTitle(e.target.value)} />          
        </label>

        <label hmtlFor="country">
          <span>Country</span>
          <input data-testid="country" onChange={(e) => setCountry(e.target.value)} />
        </label>
        
        <label hmtlFor="language"> 
          <span>Language</span>
          <input data-testid="language" onChange={(e) => setLanguage(e.target.value)} />
        </label>
        
        <label hmtlFor="year"> 
          <span>Year</span>
          <input data-testid="year" type="number" onChange={(e) => setYear(e.target.value)} />
        </label>
      </div>
      
      <BookTable books={filteredBooks} />
    </div>
  );
};

export default BookSearch;