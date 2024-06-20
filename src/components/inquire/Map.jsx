<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Map.css";

export default function Map() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const thirdPartyConsent = Cookies.get("third-party-consent");
    if (thirdPartyConsent === "accepted") {
      setHasConsent(true);
    }
  }, []);
=======
import { useState } from "react";
import "./Map.css";
export default function Map() {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326

  function onClickOpen() {
    setIsOpen(!isOpen);
  }
<<<<<<< HEAD

  return (
    <section className="google-map">
      <div
        className={`map-section ${isOpen ? "map-active" : ""}`}
        onClick={onClickOpen}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls="google-map-frame"
=======
  return (
    <section className="google-map">
      <a
        className={`map-section ${isOpen && "map-active"}`}
        onClick={() => onClickOpen()}
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
      >
        <div className="map-toggle">
          {!isOpen && (
            <div className="map-icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
          )}
          <div className="map-text">
            {!isOpen ? (
              <div className="map-open">
                Open the map{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            ) : (
              <div className="map-close">
                Close the map{" "}
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </div>
            )}
          </div>
        </div>
<<<<<<< HEAD
      </div>
      {isOpen && hasConsent && (
        <iframe
          id="google-map-frame"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13248.933492572978!2d35.49248!3d33.883643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1cadfe02ec02db0!2sM.%20A.%20CHIDIAC%20Studio!5e0!3m2!1sen!2slb!4v1614449821290!5m2!1sen!2slb"
          width="100%"
          height="400"
          tabIndex="0"
          title="M. A. Chidiac Studio Map"
          allowFullScreen=""
          aria-hidden="false"
        />
      )}
      {!hasConsent && isOpen && (
        <p className="consent-warning">
          You need to accept third-party cookies to view the map.
        </p>
      )}
=======
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13248.933492572978!2d35.49248!3d33.883643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1cadfe02ec02db0!2sM.%20A.%20CHIDIAC%20Studio!5e0!3m2!1sen!2slb!4v1614449821290!5m2!1sen!2slb"
        width="100%"
        height="400"
        tabIndex="0"
        title="map"
      />
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
    </section>
  );
}
