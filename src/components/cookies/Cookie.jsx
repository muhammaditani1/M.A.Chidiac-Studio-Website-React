import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Cookie.css";

function CookiePopup() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const consent = Cookies.get("user-consent");
    if (!consent) {
      setIsActive(true);
    } else {
      // Initialize analytics if user has already consented
      const thirdPartyConsent = Cookies.get("third-party-consent");
      if (thirdPartyConsent === "accepted") {
        initializeAnalytics();
      }
    }
  }, []);

  const handleAcceptCookies = (includeThirdParty) => {
    Cookies.set("user-consent", "accepted", {
      expires: 365,
      secure: true,
      sameSite: "Strict",
    });

    if (includeThirdParty) {
      Cookies.set("third-party-consent", "accepted", {
        expires: 365,
        secure: true,
        sameSite: "None",
      });
      initializeAnalytics();
    }

    setIsActive(false);
  };

  const initializeAnalytics = () => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-MFZ294R");

    window.dataLayer.push({
      event: "gtm.js",
      "gtm.start": new Date().getTime(),
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-W33TRL642E");
  };

  return (
    <div
      className={`cookie-container ${isActive ? "active" : ""}`}
      role="dialog"
      aria-live="assertive"
      aria-label="Cookie Consent Popup"
    >
=======
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
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
      <p>
        We use cookies on this website to give you the best experience on our
        site. To find out more, read our{" "}
        <a href="policy.html">privacy policy</a>.
      </p>
<<<<<<< HEAD
      <div className="cookie-buttons">
        <button
          className="cookie-btn"
          onClick={() => handleAcceptCookies(false)}
          aria-label="Accept Essential Cookies"
        >
          Accept Essential Cookies
        </button>
        <button
          className="cookie-btn"
          onClick={() => handleAcceptCookies(true)}
          aria-label="Accept All Cookies"
        >
          Accept All Cookies
        </button>
      </div>
=======
      <button className="cookie-btn" onClick={handleAcceptCookies}>
        Okay
      </button>
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
    </div>
  );
}

export default CookiePopup;
