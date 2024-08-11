
import React, { useState } from "react";

const CategorySection = ({ id, title, content, data }) => {
  return (
    <div className="feature-category">
      <div id={`section-${id}`} className="category-section">
        <h2>{title}</h2>
        <p className="main-description">{data.description}</p>
      </div>

      <div className="sub-description">
        {data.items.map((value) => (
          <div className="titleDescription">
            <h3>{value.name}</h3>
            <p>{value.caption}</p>
            <p className="sub-desc">{value.description}</p>
            <p>${value.retailPrice.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
