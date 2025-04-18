import React from 'react';
import listik from '../assets/Listik.svg';
import '../styles/Button.scss';
function Button() {
  return (
    <button
      className={'btn'}
      onClick={() => {
        setTimeout(() => {
          window.open(
            'https://docs.google.com/forms/d/1ZlV9_QXA1v5A-IUQ1cWbVqCJy_yr92ZG7F90MRpkqHI/viewform?edit_requested=true',
            '_blank',
          );
        }, 300);
      }}>
      JOIN US!
      <img className="listik left" src={listik} />
      <img className="listik right" src={listik} />
    </button>
  );
}

export default Button;
