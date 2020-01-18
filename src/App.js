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
          <h2>Skills</h2>
          <ul>
            <li>HTML: HTML5, WAI-ARIA</li>
            <li>CSS: BEM, Sass/Scss, Less, Styled Components, Emotion, Bootstrap, Material UI, Cross-Browser Compatibility</li>
            <li>JavaScript: ES5+, React, Vue, Redux, Mustache, Storybook, Lerna, Consuming APIs</li>
            <li>Accessibility: WCAG 2.1</li>
            <li>User Experience: Psychology, Information Architecture, Wireframes, Interviews, Testing</li>
            <li>Design: Mobile-First Responsive Design, Typography, Color Theory, Branding</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <ProjectList />
        </section>
        <section>
          <h2>Learning</h2>
          <h3>In Progress</h3>
          <ul>
            <li>React: The Complete Guide on <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" title="React: The Complete Guide (Udemy)">Udemy</a></li>
            <li>Web Accessibility by Google on <a href="https://www.udacity.com/course/web-accessibility--ud891" title="Web Accessibility by Google (Udacity)">Udacity</a></li>
          </ul>
          <h3>Completed Coursework</h3>
          <ul>
            <li>Edward Tufte’s workshop "Presenting Data and Information", Portland</li>
            <li>Workshops at UX Night School, Portland</li>
            <li><a href="https://www.lynda.com/Design-Color-tutorials/Foundations-Branding-Designers/363131-2.html" title="Branding for Designers">Branding for Designers</a></li>
            <li><a href="https://www.coursera.org/specializations/interaction-design" title="Human-Computer Interaction from UC San Diego">Human-Computer Interaction</a> from UC San Diego (<a href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972661~1427906/pdf" title="Course Certificate">Certificate</a>)</li>
            <li>Behavioral Economics from Duke University (<a href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972152~1427906/pdf" title="Course Certificate">Certificate</a>)</li>
            <li><a href="https://www.coursera.org/learn/interactive-python-1" title="Interactive Programming in Python from Rice University">Interactive Programming in Python</a> from Rice University (<a href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/204~1427906/pdf" title="Course Certificate">Certificate</a>)</li>
          </ul>
          <h3>Coding Bootcamp</h3>
          <p>PDX Code Guild - Full-time 12-week intensive program for full-stack web development with Python and Django</p>
        </section>
      </main>
      <footer className={styles.footer}>&copy; 2019 &ndash; {new Date().getFullYear()} Ariel Kaplan</footer>
    </>
  );
}

export default App;
