import './App.css';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

    <div className="App">
      <Router>
        
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
