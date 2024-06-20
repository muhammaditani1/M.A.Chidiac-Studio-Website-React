import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import { Data } from "./ServicesData";
function Services() {
  const [isClicked, setIsClicked] = useState(false);
  const [activateHover, setActivateHover] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // here's only one entry being observed

        // Toggle activateHover state based on whether the section is in view
        if (entry.isIntersecting) {
          setActivateHover(true);
        } else {
          setActivateHover(false);
        }
      },
      { threshold: 0.7 } // Trigger when at least 70% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleSpread = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section
      ref={sectionRef}
      className={isClicked ? "" : "centered-container"}
      id="services"
    >
      {" "}
      <div
        onClick={() => {
          toggleSpread();
        }}
        className={`${
          isClicked
            ? "tableDisplay"
            : `card-container ${activateHover ? "hover-effect" : ""}`
        }`}
      >
        {Data.map((item, index) => (
          <div
            key={index}
            className={`${isClicked ? "serv-card2" : "serv-card"} card-card${
              index + 1
            }`}
          >
            <div className="service-card">
              <img
                src={item.image}
                alt={item.title}
                className="service-image"
              />
              <h2 className="service-title">{item.title}</h2>
              <p className="service-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
