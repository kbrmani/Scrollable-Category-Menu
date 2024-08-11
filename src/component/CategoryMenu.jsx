import React, { useRef, useEffect } from 'react';

const CategoryMenu = ({ categories, activeCategory, onCategoryClick }) => {
  const menuRef = useRef(null);

  const scrollToSection = (index) => {
    const targetElement = document.getElementById(`section-${index}`);
    
    // Check if element exists and smoothly scroll to it
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const activeItem = menuRef.current?.children[activeCategory];
    if (activeItem) {
      activeItem.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    }
  }, [activeCategory]);

  const scrollMenu = (direction) => {
    if (menuRef.current) {
      if (direction === 'left') {
        menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      } else {
        menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="category-menu">
      <div className="menu-items" ref={menuRef}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`menu-item ${activeCategory === index ? 'active' : ''}`}
            onClick={() => onCategoryClick(index)}
          >
            {category}
          </div>
        ))}
      </div>
      <button onClick={() => scrollMenu('left')}>&lt;</button>
      <button onClick={() => scrollMenu('right')}>&gt;</button>
    </div>
  );
};

export default CategoryMenu;
