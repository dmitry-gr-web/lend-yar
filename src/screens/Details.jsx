import React from 'react';
import Button from '../components/Button';
import LocationButton from '../components/LocationButton';
import time from '../assets/time.svg'; 
import location2 from '../assets/Location2.svg';
import listik from '../assets/listik.svg';

import '../styles/Details.scss';
function Details() {
  return (
    <section className="details">
      <img className="listik left" src={listik} />
      <img className="listik right" src={listik} />
      <div className="detailsheader">Party Details</div>
      <div className="detailstime">
        <img src={time} />
        May 10 <span></span> 3:30 PM
      </div>
      <div className="detailslocation">
        <img src={location2} />
        45, Shevchenko str. <br /> Sursko-Lytovske
      </div>
      <LocationButton />
      <Button />
    </section>
  );
}

export default Details;
