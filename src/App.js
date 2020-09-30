import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const queryString = require('query-string');

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const urlString = queryString.parse(window.location.search, {decode: false});
    if (urlString.url) {
      fetch(urlString.url)
      .then((r) => r.json())
      .then((d) => setData(d))
    }
  }, [])

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    {data ? data.map((el, i) => {
        return <p key={i}>{el.path}</p>
      }) : null}
    </div>
  );
}

export default App;
