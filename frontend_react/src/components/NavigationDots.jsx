import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "About", "Work", "Skills", "testimonial", "Contact"].map(
        (item, index) => (
          <a
            key={item + index}
            className="app__navigation-dot"
            href={`#${item.toLowerCase()}`}
            style={
              active === item.toLowerCase()
                ? { backgroundColor: "#313BAC" }
                : {}
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
