import React,{  useState,useContext } from 'react';


import Logo from '../../olx-logo.png';
import './Signup.css';
import { FireBaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history=useHistory()
  const [username,setUsername] =useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('') 
  const [password, setPassword] = useState('')
  const {firebase}= useContext(FireBaseContext) 

  const handlesubmit = (e) => {
    e.preventDefault();
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase.firestore().collection('users').add({
            id: result.user.uid,
            username: username,
            phone: phone,
          }).then(() => {
            history.push("/login");
          }).catch((error) => {
            console.error('Error adding user data to Firestore:', error);
          });
        });
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  }
  

  return (
  <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}  alt='logo'></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="number"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
