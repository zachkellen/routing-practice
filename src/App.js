import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Welcome from './Views/Welcome';
import Number from './Views/Number';
import Word from './Views/Word';
import Variables from './Views/Variables';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route exact path='/home'>
          <Welcome />
        </Route>
        <Route exact path='/:num'>
          <Number />
        </Route>
        {/* <Route exact path='/:word'>
          <Word />
        </Route> */}
        <Route exact path='/:word/:font/:background'>
          <Variables />
        </Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
