

function DisplayBooksPanel({ books, setBooks, user }) {

  return (
    <div className="books-panel">
      {books.map(book => {
        return (
          <div key={book.id} className="bookcard">
            <p>{book.book_title}</p>
            <p>{book.book_author}</p>
            <p>{book.book_description}</p>
            <p>added by: {book.user_id}</p>
          </div>
        );
      })}      
    </div>
  );
}

export default DisplayBooksPanel;
