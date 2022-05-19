import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import ContactForm from '../ContactForm';

function Portfolio() {
  // state of current page
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case 'about':
        return <About></About>;
      case 'contactform':
        return <ContactForm></ContactForm>;
      case 'portfolio':
        return <Projects></Projects>;
      case 'resume':
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}
export default Portfolio;
