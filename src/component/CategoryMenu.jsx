
import React, { useRef, useState, useEffect } from 'react';

const CategoryMenu = ({ categories, activeCategory, onCategoryClick }) => {
  const menuRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (menuRef.current) {
        setIsOverflowing(menuRef.current.scrollWidth > menuRef.current.clientWidth);
      }
    };
    
    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollMenu = (direction) => {
    if (direction === 'left') {
      menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    } else {
      menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className={`category-menu ${isScrolledDown ? 'scrolled' : ''}`}>
     
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
      {isOverflowing && (
        <>
          <button className="scroll-arrow left-arrow" onClick={() => scrollMenu('left')}>
            &lt;
          </button>
          <button className="scroll-arrow right-arrow" onClick={() => scrollMenu('right')}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default CategoryMenu;
