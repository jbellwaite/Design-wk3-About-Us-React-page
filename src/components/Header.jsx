import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import WebFont from 'webfontloader';

function Header(){

  const element = (
    <FontAwesomeIcon icon={faCoffee} />
  )

  WebFont.load({
    google: {
      families: ['Supermercado One', 'cursive']
    }
  });

  let myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
    fontFamily: 'Supermercado One'
  };
  return (
    <div style={myStyledComponentStyles}>
      <h1>Our Profile Home</h1>
      <Link to="/">{element}</Link> | <Link to="/aboutus">About Us</Link>
    </div>
  );
}

export default Header;
