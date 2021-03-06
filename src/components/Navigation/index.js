import React from 'react';

function Navigation(props) {
  const tabs = ['about', 'portfolio', 'resume', 'contact'];

  // const clickHandler(event){
  //   props.handlePageChange(event.target.attribute('id'))
  // }
  return (
    <ul className="nav">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            id={tab}
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
