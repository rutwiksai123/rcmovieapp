import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  // State variables to store username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle the form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password match the expected values
    if (username === 'rcmovies' && password === 'rcmovies123') {
      setError(''); // Clear any previous error message
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      setError('Invalid username or password'); // Display error message
    }
  };

  // Render the login form
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
