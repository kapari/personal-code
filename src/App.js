import React from 'react';
import logo from './logo.svg';
import TextLink from './Components/Global/TextLink';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import Interests from './Components/Interests/Interests';
import ProjectList from './Components/ProjectList/ProjectList';
import styled from '@emotion/styled';

const Body = styled.div`
  background-color: var(--bg-color);
  color: var(--text-color);
`;

const Logo = styled.img`
  height: 10vmin;
  margin-right: 2vmin;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 6vmin 20px;
  font-size: calc(6px + 2vmin);
`;

const PageHeading = styled.h1`
  margin: 0;
  font-size: calc(10px + 3vmin);
  line-height: 1;
`;

const PageSubheading = styled.p`
  margin: .5em 0 0;
  line-height: 1;
`;

const Main = styled.main`
  border-top: 1px solid var(--contrast-color);
  border-bottom: 1px solid var(--contrast-color);
  padding: 2em;
`;

const Footer = styled.footer`
  background-color: var(--bg-color);
  padding: 2em;
  text-align: center;
`;

function App() {
  return (
    <Body>
      <Header>
        <Logo src={logo} alt="logo" />
        <div>
          <PageHeading>Ariel Kaplan</PageHeading>
          <PageSubheading>Front-End Dev / UX</PageSubheading>
        </div>
      </Header>
      <Main>
        <section>
          <h2>Hello!</h2>
          <p>I develop web sites and applications with an artistic eye and a drive for accessibility and inclusive design.</p>
          <p>My foundations involve years of casually building websites for friends and family, a studio art degree, a few courses in Python both on- and offline, and a consistent curiosity about how people think and behave. I'm always looking for a clearer, simpler, more straightforward and elegant way of doing things, whether it is a new UI, React components, CSS secrets, documentation, teaching, or processes.</p>
          <p>When I'm not programming or sketching UI elements, I can be found behind a camera or in the local dance community. I teach group classes in Nightclub Two-Step, Hustle, Country Two-Step, and Cross-Step Waltz, and private lessons in those and others, including West Coast Swing. </p>
        </section>
        <section>
          <Interests />
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
            <li>React: The Complete Guide on <TextLink href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" title="React: The Complete Guide (Udemy)">Udemy</TextLink></li>
            <li>Web Accessibility by Google on <TextLink href="https://www.udacity.com/course/web-accessibility--ud891" title="Web Accessibility by Google (Udacity)">Udacity</TextLink></li>
          </ul>
          <h3>Completed Coursework</h3>
          <ul>
            <li>Edward Tufte’s workshop "Presenting Data and Information", Portland</li>
            <li>Workshops at UX Night School, Portland</li>
            <li><TextLink href="https://www.lynda.com/Design-Color-tutorials/Foundations-Branding-Designers/363131-2.html" title="Branding for Designers">Branding for Designers</TextLink></li>
            <li><TextLink href="https://www.coursera.org/specializations/interaction-design" title="Human-Computer Interaction from UC San Diego">Human-Computer Interaction</TextLink> from UC San Diego (<TextLink href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972661~1427906/pdf" title="Course Certificate">Certificate</TextLink>)</li>
            <li>Behavioral Economics from Duke University (<TextLink href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/972152~1427906/pdf" title="Course Certificate">Certificate</TextLink>)</li>
            <li><TextLink href="https://www.coursera.org/learn/interactive-python-1" title="Interactive Programming in Python from Rice University">Interactive Programming in Python</TextLink> from Rice University (<TextLink href="https://www.coursera.org/api/legacyCertificates.v1/spark/statementOfAccomplishment/204~1427906/pdf" title="Course Certificate">Certificate</TextLink>)</li>
          </ul>
          <h3>Coding Bootcamp</h3>
          <p>PDX Code Guild - Full-time 12-week intensive program for full-stack web development with Python and Django</p>
        </section>
      </Main>
      <Footer>
        <ContactInfo />
        <p>&copy; 2019 &ndash; {new Date().getFullYear()} Ariel Kaplan</p>
      </Footer>
    </Body>
  );
}

export default App;
