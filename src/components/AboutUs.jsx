import React from 'react';
import susannahProfile from '../assets/images/susannah.jpg';
import jessieProfile from '../assets/images/jessie.jpg';
import AboutUsComponent from './AboutUsComponent';

var masterAboutUs = [
  {
    name: 'Jessie',
    location: 'Aurora, Or',
    tagline: 'TBD',
    image:<img src={jessieProfile}/>,
    bio:'bioHere'
  },
  {
    name: 'Susannah',
    location: 'Portland, OR',
    tagline: 'TBD',
    image:<img src={susannahProfile}/>,
    bio:'bioHere'
  }
];

function AboutUs(){
  return (
    <div>
      <hr/>
      {masterAboutUs.map((profile, index) =>
        <AboutUsComponent
          name={profile.name}
          location={profile.location}
          tagline={profile.tagline}
          image={profile.image}
          bio={profile.bio}
          key={index}/>
      )}
    </div>
  );
}

export default AboutUs;
