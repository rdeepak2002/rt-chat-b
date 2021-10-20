import './App.css';

import HomePage from './components/HomePage/home.js';
import LoginPage from './components/LoginPage/login.js';
import ProfilePage from './components/ProfilePage/profile.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>




      <Switch>
        <Route path = "/login">
          <LoginPage />
        </Route>
        <Route path = "/home">
          <HomePage />
        </Route>
        <Route path = "/profile">
          <ProfilePage />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
