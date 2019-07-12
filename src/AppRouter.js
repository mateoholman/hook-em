import React from 'react';
import App from './App';
import UseState from './views/UseState';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <Route path="/useState/" component={UseState} />
      </div>
    </Router>
  );
}

export default AppRouter;