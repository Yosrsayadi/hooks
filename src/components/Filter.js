import React from 'react';

const Filter = ({ titleFilter, rateFilter, handleTitleFilterChange, handleRateFilterChange, clearFilters }) => {
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
        <input
          type="number"
          placeholder="Filter by rate"
          value={rateFilter}
          onChange={handleRateFilterChange}
        />
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    );
  };
  


export default Filter;
