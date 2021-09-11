import { useState, useEffect } from 'react';
import AddBookForm from './AddBookForm';
import DisplayBooksPanel from './DisplayBooksPanel';

function MyBookshelf() {
  const baseURL = "https://book-app-heroku-backend.herokuapp.com/";

  const [ books, setBooks ] = useState([]);
  const [ isAddBook, setIsAddBook ] = useState(false);

  useEffect(() => {
    fetch(`${baseURL}books`)
      .then(r => r.json())
      .then(books => {
        console.log(books);
        setBooks(books);
      });
  }, []);

  function handleAddBookClick() {
    setIsAddBook(isAddBook => !isAddBook);
  }

  return (
    <div className="App">
      <div className="h2-add-book-wrapper">
        <h2>Bookshelf</h2>
        <button onClick={handleAddBookClick}
                className="group"
                style={ {backgroundColor: "lavenderblush",
                         border: "none", borderRadius: 5, 
                         height: "3 rem" } }>
          Add
        </button>
      </div>
      {
        isAddBook
        ? <AddBookForm isAddBook={isAddBook}
                setIsAddBook={setIsAddBook}
                books={books}
                setBooks={setBooks} />
        : <DisplayBooksPanel
                books={books}
                setBooks={setBooks} />

      }
    </div>
  )
}

export default MyBookshelf;
