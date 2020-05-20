import React from 'react';
import './layout.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Dashboard } from './Components/Dashboard/Dashboard';
import { Navigation } from './Components/Navigation/Navigation';
import { Settings } from './Components/Settings/Settings';
import { Users } from './Components/Users/Users';
import { SeoSettings } from './Components/SeoSettings/SeoSettings';
import { Pages } from './Components/Pages/Pages';
import { Posts } from './Components/Posts/Posts';

function App() {
  return (
    <div className="app">
      <Router>
      <div class="layout">
        <Navigation />

        <Switch>

          <Route path="/" exact component={ Dashboard } />
          <Route path="/pages" exact component={ Pages } />
          <Route path="/posts" exact component={ Posts } />
          <Route path="/settings" exact component={ Settings } />
          <Route path="/seo" exact component={ SeoSettings } />
          <Route path="/users" exact component={ Users } />

        </Switch>

      </div>
      </Router>  
    </div>
  );
}

export default App;
