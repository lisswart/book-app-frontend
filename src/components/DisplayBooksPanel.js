

function DisplayBooksPanel({ books, setBooks }) {

  return (
    <div className={books}>
      {books.map(book => {
        return (
          <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
        );
      })}      
    </div>
  );
}

export default DisplayBooksPanel;
