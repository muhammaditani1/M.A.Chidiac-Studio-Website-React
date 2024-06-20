import FooterLogo from "../../images/logo-footer.png";
import "./Footer.css";
<<<<<<< HEAD
import { Bounce } from "react-awesome-reveal";
=======
import { AnimatedOnScroll } from "react-animated-css-onscroll";
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326

export default function Footer() {
  return (
    <section className="footer" id="policy">
      <div className="footer-container">
        <div
          className="footer-image"
          data-wow-duration="1.2s"
          style={{
            visibility: "visible",
            animationDuration: "1.2s",
            animationName: "fadeInUp",
          }}
        >
          <a href="#top">
<<<<<<< HEAD
            <Bounce delay={50} duration={1200}>
=======
            <AnimatedOnScroll animationIn="bounceInUp" delay={50}>
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
              <img
                src={FooterLogo}
                width="156"
                height="72"
                alt="Company logo"
                loading="lazy"
              />
<<<<<<< HEAD
            </Bounce>
=======
            </AnimatedOnScroll>
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
          </a>
        </div>

        <div className="footer-links">
          <a
            href="https://www.instagram.com/machidiac/"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.facebook.com/MAChidiacStudio/"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com/machidiac"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/machidiac"
            title="LinkedIn+"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://blog.machidiac.com/"
            title="Blog"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-tumblr" aria-hidden="true"></i>
          </a>
        </div>

        <div className="footer-text">
          <div className="footer-copy">
            <a href="http://machidiac.com" target="_blank" rel="noreferrer">
<<<<<<< HEAD
              © M. A. CHIDIAC Studio 2024
=======
              © M. A. CHIDIAC Studio 2023
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
            </a>
          </div>

          <div className="footer-made">We make things look good.</div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* <div className="local-scroll">
        <a href="#top" className="link-to-top">
          <i className="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div> */}
>>>>>>> 2394336dbc3367ac43ed35d753dca06f8c71c326
    </section>
  );
}
