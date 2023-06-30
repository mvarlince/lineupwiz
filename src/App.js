import './App.css';
import { useState } from 'react';
import Home from './scenes/Home';
import Login from './scenes/Login';
import SignUp from './scenes/Signup';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import HeaderText from './components/HeaderText';

function App() {
  const [user, setUser] = useState()
  const [isUser, setIsUser] = useState(true)
  const [isGuest, setIsGuest] = useState(false)
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <>
      <HeaderText currentImage = {currentImage} setCurrentImage={setCurrentImage}/>
      {user|| (isGuest)
        ? < Home user={user} currentImage = {currentImage} setCurrentImage={setCurrentImage}/>
        : isUser 
          ? < Login setUser={setUser} setIsUser={setIsUser} setIsGuest={setIsGuest}/>
          : < SignUp setUser={setUser} setIsUser={setIsUser} />
      }
    </>
  );
}

export default App;
