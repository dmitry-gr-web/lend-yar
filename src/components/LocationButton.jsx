import React from 'react';
import location from '../assets/tabler_location.svg';
import '../styles/LocationButton.scss';
const LocationButton = () => {
  return (
    <a
      className="locationlink"
      href="https://www.google.com/maps/place/LS+Location/@48.3464071,34.9410697,14.99z/data=!4m6!3m5!1s0x40dbf1df1cb5d231:0xbfcdf82307517e03!8m2!3d48.3479167!4d34.9359231!16s%2Fg%2F11vbwld22b?hl=uk&entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
      <img src={location} />
      Direct Location
    </a>
  );
};

export default LocationButton;
