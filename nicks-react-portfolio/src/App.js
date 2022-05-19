import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('about');

  const RenderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    console.log(currentPage);
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <ContactForm />;
      case 'portfolio':
        return <Projects />;
      case 'resume':
        return <Resume />;
      default:
        return; //<About></About>;
    }
  };
  return (
    <div>
      <h1></h1>
      <main>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <RenderPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
