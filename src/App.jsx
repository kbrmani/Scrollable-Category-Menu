import React, { useState, useEffect } from "react";
import CategoryMenu from "./component/CategoryMenu";
import CategorySection from "./component/ContentSelection";
import { serviceCatalog } from "../src/assets/data";
import Header from "./header/Header";
import "./App.css";

function App() {
  const categories = [
    "Features",
    "Haircutting",
    "Styling",
    "Color Services",
    "Natural Hairstyling",
    "Relaxer Texturizer",
    "Extension, Intalls and Wigs",
    "Treatments",
  ];
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    document
      .getElementById(`section-${index}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".category-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveCategory(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="sections">
        {serviceCatalog.map((category, index) => {
          console.log(category);
          return (
            <CategorySection
              key={index}
              id={index}
              title={category.name}
              data={category}
              content={category.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
