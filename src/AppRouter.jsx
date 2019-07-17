import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import SimpleInput from './views/SimpleInput';
import CoolKidsClub from './views/CoolKidsClub';
import MediumInput from './views/MediumInput';

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
        <Route path="/simple" component={SimpleInput} />
        <Route path="/useState" component={CoolKidsClub} />
        <Route path="/medium" component={MediumInput} />
      </div>
    </Router>
  );
}

export default AppRouter;
