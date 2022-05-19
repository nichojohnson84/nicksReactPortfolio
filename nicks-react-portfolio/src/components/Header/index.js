import React from 'react';
import Navigation from '../Navigation';

function Portfolio(props) {
  // state of current page

  return (
    <div>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </div>
  );
}
export default Portfolio;
