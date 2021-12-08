import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Header } from './Views/Header/Header';
import { Home  } from './Views/Home/Home';
import { Footer } from './Views/Footer/Footer';
import TeamList from './Views/Teams/TeamList';
import TeamDetails from './Views/Teams/TeamDetails';
import PlayersList from './Views/Players/PlayersList';
import PlayerDetails from './Views/Players/PlayersDetails';

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

          <Route exact path='/teams' component={TeamList} />
          <Route path='/teams/:teamId' component={TeamDetails} />
          
          <Route exact path='/players' component={PlayersList} />
          <Route path='/players/:playerId' component={PlayerDetails} />

      </Switch>

      <footer>
        <Footer />
      </footer>

    </Router>
    </div>
  );
}

export default App;
