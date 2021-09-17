import React from 'react'
import { Link, useHistory } from 'react-router-dom';

function Header({ user, onLogout }) {
  // const baseURL = "https://book-app-heroku-backend.herokuapp.com/";
  const localURL = "http://localhost:3000";

  const history = useHistory();

  function handleLogout() {
    fetch(`${localURL}/logout`, { method: "DELETE" })
      .then(() => {
        onLogout();
        history.push("/login")
      });
  }

  return (
    <div className='header'>
      {
        user
        ? <>
            <span>Welcome, {user.username}</span><br />
            <Link to="/me">Profile</Link>
            <button onClick={handleLogout}>Log out</button>
          </>
        : <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
      }
    </div>
  )
}

export default Header;
