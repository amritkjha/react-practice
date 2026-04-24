import React, { useEffect, useState } from 'react';
import { items as defaultItems } from './items';
import './style.css';

export default function MultipleFilters() {
  const [items, setItems] = useState(defaultItems);
  const [selectedFilters, setSelectedFilters] = useState<any>([]);

  let filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];

  const handleFilterClick = (el) => {
    if (selectedFilters.includes(el))
      setSelectedFilters((prev) => prev.filter((item) => item !== el));
    else setSelectedFilters((prev) => [...prev, el]);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Algochurn Filters</h2>
      <div className="buttons-container">
        {filters.map((el, idx) => (
          <button
            className={`button ${selectedFilters.includes(el) && 'active'}`}
            key={`filters-${idx}`}
            onClick={() => handleFilterClick(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="items-container">
        {(selectedFilters.length === 0
          ? items
          : items.filter((item) => selectedFilters.includes(item.category))
        ).map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
