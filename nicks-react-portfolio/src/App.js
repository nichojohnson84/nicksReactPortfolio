import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <h1>Hello Mom</h1>
      <main>
        <Header></Header>
        <Navigation></Navigation>
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
