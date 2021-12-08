import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Header } from './Views/Header/Header';
import { Home  } from './Views/Home/Home';
import { Footer } from './Views/Footer/Footer';
import TeamList from './Views/Teams/TeamList';
import TeamDetails from './Views/Teams/TeamDetails';

function App() {
  return (
    <div className="App">
    <Router>

      <header>
        <Header />  
      </header>

      <Switch>
      
          <Route exact path='/'>
            <Home />  
          </Route>

          <Route path='/teams/:teamId' component={TeamDetails} />
          <Route path='/teams' component={TeamList} />

      </Switch>

      <footer>
        <Footer />
      </footer>

    </Router>
    </div>
  );
}

export default App;
