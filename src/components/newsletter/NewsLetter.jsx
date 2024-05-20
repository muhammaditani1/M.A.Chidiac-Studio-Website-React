import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./NewsLetter.css";
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to submit email to your newsletter service
    console.log("Submitting email:", email);
    // Reset the input field after submission
    setEmail("");
  };
  return (
    <section id="news">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-title">
          <span>STAY INFORMED WITH OUR NEWSLETTER</span>
        </div>

        <div className="input-container">
          <input
            className="input-mail"
            type="email"
            id="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit">
            <span className="sign-text">Subscribe</span>
          </button>
        </div>

        <section className="bg-stars">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </section>

        <div>
          <h3>
            <FontAwesomeIcon icon={faInfoCircle} /> Trust us, we will never send
            you spam.
          </h3>
        </div>
      </form>

      {/* <div className="news__title">
        <h3>STAY INFORMED WITH OUR NEWSLETTER</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="ENTER YOUR EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <div>
        <h3>
          <FontAwesomeIcon icon={faInfoCircle} /> Trust us, we will never send
          you spam.
        </h3>
      </div> */}
    </section>
  );
}

export default NewsletterForm;
