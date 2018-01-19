import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import WebFont from 'webfontloader';
import wall from '../assets/images/wall.jpg';

function Header(){

  const element = (
    <FontAwesomeIcon icon={faCoffee} />
  );

  WebFont.load({
    google: {
      families: ['Supermercado One', 'Lato', 'cursive'],
    }
  });

  const styles = {
    containerStyle: {
      backgroundColor: '#ecf0f1',
      fontFamily: 'sans-serif',
      paddingTop: '50px',
      textAlign: 'center',
      fontFamily: 'Supermercado One',
      fontSize: '60px',
      backgroundImage: `url(${wall})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'white'
    },
    bodyStyle:{
      fontFamily: 'Lato',
      fontSize: '20px',
      color: 'blue',
      background: 'white'
    }
  };
  return (
    <div style={styles.containerStyle}>
      <h1>Our Profile Home</h1>
      <Link style={styles.bodyStyle} to="/">{element}</Link> | <Link style={styles.bodyStyle} to="/aboutus">About Us</Link>
    </div>
  );
}

export default Header;
