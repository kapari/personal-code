import React from 'react';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <h1>Ariel Kaplan</h1>
        <ul>
          <li>
            <a
              className="App__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AlternateEmail titleAccess="Email Ariel" />
            </a> 
          </li>
          <li>
            <a
              className="App__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter titleAccess="Twitter Account (opens in a new tab)" />
            </a> 
          </li>
          <li>
            <a
              className="App__link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn titleAccess="LinkedIn Profile (opens in a new tab)" />
            </a> 
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h2>Hello</h2>
          <p>Stuff</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Stuff</p>
        </section>
        <section>
          <h2>Learning</h2>
          <p>Stuff</p>
        </section>
      </main>
      <footer>&copy; 2019 Ariel Kaplan</footer>
    </div>
  );
}

export default App;
