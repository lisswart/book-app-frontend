import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup({ onLogin }) {
  // const baseURL = "https://book-app-heroku-backend.herokuapp.com/";
  const localURL = "http://localhost:3000";

  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ errors, setErrors ] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors("");
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": username,
        "email": email
      })
    };
    fetch(`${localURL}/users`, configObj)
      .then(response => {
        if (response.ok) {
          response.json().then(user => {
            onLogin(user);

          })
        }
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>username:</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>email:</label>
      <input
        type="text"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default Signup
