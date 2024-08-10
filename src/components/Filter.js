// src/components/Filter.js
import React from 'react';

function Filter({ category, onCategoryChange }) {
  return (
    <select name="filter" onChange={onCategoryChange} value={category}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;