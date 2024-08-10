// src/components/Header.js
import React from 'react';

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopping List</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;