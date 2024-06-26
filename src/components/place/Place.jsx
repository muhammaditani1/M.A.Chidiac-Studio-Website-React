import Space from "../../images/promo-1.png";
import "./Place.css";
import { Roll } from "react-awesome-reveal";

export default function Place() {
  return (
    <section id="place">
      <div className="place__container">
        <div className="place__info__container">
          <div className="place__title">
            <h3>Our Place & Space</h3>
          </div>
          <p>
            Our headquarters is located in the cultural metropolis Beirut. The
            geographical location and the creative background of the city helped
            us expand and create an international hub connecting us to partners
            and clients from all over the globe.
          </p>
          <p>
            Our agency is equipped with state-of-the-art computers and
            audiovisual equipment, the crème de la crème. To us, it is
            considered more of a lab than a studio. A lab that helps us stay on
            top in our field.
          </p>
        </div>
        <div className="place__image">
          <Roll delay={250} duration={1500}>
            <img src={Space} alt="space" />
          </Roll>

        </div>
      </div>
    </section>
  );
}
