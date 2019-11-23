import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StartPage from './pages/start-page';
import HomePage from './pages/home-page';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <div>
          <Route path="" exact component={StartPage}/>
          <Route path="home" component={HomePage}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
