import "./About.css";
import Award from "../../images/M-A-Chidiac-Studio-MEA-Business-Award.jpg";
import { Bounce } from "react-awesome-reveal";

function About() {
  return (
    <section id="about" className="about__section">
      <h2 className="about__title"> ABOUT M. A. CHIDIAC</h2>
      <div className="about__container">
        <div className="about__award">
          <blockquote>
            <Bounce delay={250} duration={1500}>
              <img src={Award} width="194" height="180" alt="Award" />
            </Bounce>

            <p>
              The Visual Communication <br /> Agency for your visual <br />{" "}
              communication needs.
            </p>
            <footer>- Since 2012</footer>
          </blockquote>
        </div>

        <div className="about__detail1">
          <div className="row text-left">
            M. A. Chidiac Studio started in 2012 as an animation studio. It grew
            up to be one of the most prominent digital production houses and
            design agencies in the region. Throughout the years, the studio
            attracted clients and partnerships from all over the globe.
            <br />
            <br />
            M. A. Chidiac Studio is a full service production house, visual
            communication and animation studio located in the heart of the
            cultural metropolis Beirut, Lebanon. Our studio consists of talented
            and award winning professionals equipped with the latest in
            production technology.
          </div>
        </div>
        <div className="about__detail2">
          <div className="row text-left">
            We love what we do, and bring enthusiasm and commitment to get
            everything done “just right”!
            <br />
            <br /> We take the time to understand your real business drivers,
            and respond sourcing from our practical wide ranging experience.
            <br />
            <br /> Our studio does not differentiate between a small and a big
            project. A project is simply a project. We handle it with dedication
            and integrity, gaining your confidence and long term trust by the
            second.
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
