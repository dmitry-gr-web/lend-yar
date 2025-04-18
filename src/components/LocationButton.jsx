import React from 'react';
import location from '../assets/tabler_location.svg';
import '../styles/LocationButton.scss';
const LocationButton = () => {
  return (
    <a className="locationlink">
      <img src={location} />
      Direct Location
    </a>
  );
};

export default LocationButton;
