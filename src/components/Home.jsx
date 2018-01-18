import React from 'react';


function Home(){
  let myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
  };

  return(
    <div style={myStyledComponentStyles}>
      <h1>Profile Page</h1>
      <h2>Susannah and Jessie</h2>
      <hr/>
      <p>Expert Front End Developers</p>
    </div>
  );
}

export default Home;
