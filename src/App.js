import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

function App() {
  // const herokuURL = "https://book-app-heroku-000.herokuapp.com"
  const localURL = "http://localhost:3000";

  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${localURL}/users`)
      .then(r => r.json())
      .then(usersArr => {
        console.log(usersArr);
        setUsers(usersArr);
      });
  }, []);

  useEffect(() => {
    fetch(`${localURL}/books`)
      .then(r => r.json())
      .then(booksArr => {
        console.log(booksArr);
        setBooks(booksArr);
      });
  }, []);

  const displayUsers = users.map(user => {
    return (
      <li key={user.id}>
        {user.firstname} {user.lastname}, books:
        <ol>
          {user.books.map(book => {
            return (
              <li key={book.id}>{book.title} - {book.author}</li>
            )
          })}
        </ol>
      </li>
    );
  });

  const displayBooks = books.map(book => {
    return (
      <li key={book.id}>
        {book.title} - {book.author}, users:
        <ol>
          {book.users.map(user => {
            return (
              <li key={user.id}>{user.firstname} {user.lastname}</li>
            )
          })}
        </ol>
      </li>
    );
  })
  
  return (
    <main>
      <ol>
        {displayUsers}
      </ol>
      <br />
      <ol>
        {displayBooks}
      </ol>
    </main>
  );
}

export default App;
