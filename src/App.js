import React from 'react';
import logo from './logo.svg';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import Interests from './Components/Interests/Interests';
import ProjectList from './Components/ProjectList/ProjectList';
import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>Ariel Kaplan</h1>
        <ContactInfo />
        <Interests />
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
          <ProjectList />
        </section>
        <section>
          <h2>Learning</h2>
          <p>Stuff</p>
        </section>
      </main>
      <footer className={styles.footer}>&copy; 2019 &ndash; {new Date().getFullYear()} Ariel Kaplan</footer>
    </>
  );
}

export default App;
