import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import CoolKidsClub from './views/CoolKidsClub';
import './styles/app.css';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/useState/">useState</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={App} />
        <Route path="/useState/" component={CoolKidsClub} />
      </div>
    </Router>
  );
}

export default AppRouter;
