import React from 'react';
import PropTypes from 'prop-types';

function AboutUsComponent(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p><em>{props.tagline}</em></p>
      <p>{props.image}</p>
      <p>{props.location}</p>
      <p>{props.bio}</p>
    </div>
  );
}

AboutUsComponent.propTypes={
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tagline:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  bio:PropTypes.string.isRequired
};

export default AboutUsComponent;
