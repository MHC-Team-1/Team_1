import Landing from './Landing/Landing';
import {BrowserRouter, Router, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
      <Landing />
      <Switch>
        <Router path="/">
          <div>
          <Landing />
          </div>
        </Router>
        <Router path="/Landing">
          <Game_intro />
          <Game />
        </Router>
        <Router path="/Landing/Game_intro">
          <Game />
        </Router>

    </Switch>
    </BrowserRouter>

  );
}

export default App;

