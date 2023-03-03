import './App.css';
import Header from './components/Header';
import Home from './scenes/Home';
import Formation433 from './components/Formation433';
import "bootstrap/dist/css/bootstrap.min.css";
import Formation343 from './components/Formation343';

function App() {
  return (
      <>
        <Header />      
         <Home />
        {/* < Formation343 />
        < Formation433 /> */}
      </>
  );
}

export default App;
