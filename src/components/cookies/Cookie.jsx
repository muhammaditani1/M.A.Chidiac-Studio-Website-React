import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Cookie.css";

function CookiePopup() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    /* Check if the cookie consent has been given */
    const consent = Cookies.get("user-consent");
    /* If not given, show the popup */
    if (!consent) {
      setIsActive(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    /* Set a cookie to record the user's consent */
    /* Expires in 365 days */
    Cookies.set("user-consent", "accepted", { expires: 365 });
    setIsActive(false);
    /* Hide the cookie popup */
  };

  return (
    <div className={`cookie-container ${isActive ? "active" : ""}`}>
      <p>
        We use cookies on this website to give you the best experience on our
        site. To find out more, read our{" "}
        <a href="policy.html">privacy policy</a>.
      </p>
      <button className="cookie-btn" onClick={handleAcceptCookies}>
        Okay
      </button>
    </div>
  );
}

export default CookiePopup;
