import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './scenes/Home';
import Login from './scenes/Login';
import SignUp from './scenes/Signup';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import HeaderText from './components/HeaderText';

function App() {
  const [user, setUser] = useState()
  const [isUser, setIsUser] = useState(true)
  return (
    <>
      <HeaderText />
      {user
        ? < Home user={user} />
        : isUser
          ? < Login setUser={setUser} setIsUser={setIsUser} />
          : < SignUp setUser={setUser} setIsUser={setIsUser} />
      }
    </>
  );
}

export default App;
