import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import { Header } from './Views/Header/Header';
import { Home  } from './Views/Home/Home';
import { Footer } from './Views/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Router>

      <header>
        <Header />  
      </header>

      <main>
        <Home />  
      </main>

      <footer>
        <Footer />
      </footer>

    </Router>
    </div>
  );
}

export default App;
