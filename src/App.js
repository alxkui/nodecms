import React from 'react';
import './layout.scss'
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Navigation } from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <div class="layout">
        <Navigation/>
        <Dashboard />  
      </div>  
    </div>
  );
}

export default App;
