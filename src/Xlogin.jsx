import React, { useState } from 'react';
// import './XLogin.css';

const XLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <div className="message success">
        <h1>Login Page</h1>
        {message}
        </div>;
  }

  return (
    <div className="login-form">
        <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <div className="message error">{message}</div>}
    </div>
  );
};

export default XLogin;