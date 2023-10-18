import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FireBaseContext } from '../../store/Context';
import './Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FireBaseContext);
  const  history = useHistory()


  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <button>Signup</button>
      </div>
    </div>
  );
}

export default Login;
