import React from 'react';
import logo from './logo.svg';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>Ariel Kaplan</h1>
        <ContactInfo />
      </header>
      <main className={styles.main}>
        <section>
          <h2>Hello</h2>
          <p>The only home we’ve ever known preserve and cherish that pale blue dot. Cosmic fugue, circumnavigated descended from astronomers decipherment, permanence of the stars science Euclid muse about!</p>
          <p>A still more glorious dawn awaits Euclid, tendrils of gossamer clouds extraplanetary muse about vastness is bearable only through love Cambrian explosion! Extraordinary claims require extraordinary evidence of brilliant syntheses? Take root and flourish, stirred by starlight billions upon billions Drake Equation.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Stuff</p>
          <ul>
            <li>
              <article>
                <h3>Project 1</h3>
                <p>Stuff</p>
              </article>
            </li>
            <li>
              <article>
                <h3>Project 2</h3>
                <p>Stuff</p>
              </article>
            </li>
            <li>
              <article>
                <h3>Project 3</h3>
                <p>Stuff</p>
              </article>
            </li>
            <li>
              <article>
                <h3>Project 4</h3>
                <p>Stuff</p>
              </article>
            </li>
            <li>
              <article>
                <h3>Project 5</h3>
                <p>Stuff</p>
              </article>
            </li>
          </ul>
        </section>
        <section>
          <h2>Learning</h2>
          <p>Stuff</p>
        </section>
      </main>
      <footer className={styles.footer}>&copy; 2019 Ariel Kaplan</footer>
    </>
  );
}

export default App;
