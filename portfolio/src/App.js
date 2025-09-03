
import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      Hello
      <Header/>
      <Container>
          <About />
          <Skills />
          <Projects />
      </Container>
    </div>
  );
}

export default App;
