import React from 'react';
import styled from '@emotion/styled';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const Body = styled.div`
  background-color: var(--bg-color);
  color: var(--text-color);
`;

function App() {
  return (
    <Body>
      <Header />
      <Main />
      <Footer />
    </Body>
  );
}

export default App;
