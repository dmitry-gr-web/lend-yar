import React from 'react';
import listik from '../assets/listik.svg';
import '../styles/Button.scss';
function Button() {
  return (
    <button className={'btn'}>
      JOIN US!
      <img className="listik left" src={listik} />
      <img className="listik right" src={listik} />
    </button>
  );
}

export default Button;
