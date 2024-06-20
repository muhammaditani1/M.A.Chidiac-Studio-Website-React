import Marquee from "react-fast-marquee";
import AUB from "../../images/clients-logos/aub.png";
import AUDI from "../../images/clients-logos/audi.png";
import BARCA from "../../images/clients-logos/barca.png";
import BH from "../../images/clients-logos/BH.png";
import BIAF from "../../images/clients-logos/biaf.png";
import BOB from "../../images/clients-logos/bob.png";
import CARITAS from "../../images/clients-logos/caritas.png";
import CARREFOUR from "../../images/clients-logos/carrefour.png";
import CSRL from "../../images/clients-logos/csrlebanon.png";
import DALAL from "../../images/clients-logos/Dalal.png";
import IDS from "../../images/clients-logos/daouk.png";
import FBO from "../../images/clients-logos/fbo.png";
import FPSC from "../../images/clients-logos/Fpsc.png";
import HALLAB from "../../images/clients-logos/hallab.png";
import ICMPD from "../../images/clients-logos/icmpd.png";
import IMC from "../../images/clients-logos/imc.png";
import INTEL from "../../images/clients-logos/intel.png";
import LACPA from "../../images/clients-logos/lacpa.png";
import HABANO from "../../images/clients-logos/lcdh.png";
import LRC from "../../images/clients-logos/lrc.png";
import MAJID from "../../images/clients-logos/majid.png";
import MEDGULF from "../../images/clients-logos/medgulf.png";
import MUSEU from "../../images/clients-logos/museu.png";
import OXFAM from "../../images/clients-logos/oxfam.png";
import PSG from "../../images/clients-logos/psg.png";
import STC from "../../images/clients-logos/savethechildren.png";
import TLC from "../../images/clients-logos/sultan.png";
import UN from "../../images/clients-logos/un.png";
import UNDP from "../../images/clients-logos/undp.jpg";
import UNRWA from "../../images/clients-logos/UNRWA.png";
import EXPODOHA from "../../images/clients-logos/doha2023.png";
import IFRC from "../../images/clients-logos/ifrc.png";
import KSA2030 from "../../images/clients-logos/ksa2030.png";
import PACE_E_LUCEE from "../../images/clients-logos/paceeluce.png";
import "./Clients.css";

function Clients() {
  return (
    <section className="main__clients">
      <div className="Client-Title">
        <h3>
          WE PRIDE OURSELVES WITH THE DIVERSITY OF OUR CLIENTS' LIST,
          <br />
          FROM LOCAL TO REGIONAL AND INTERNATIONAL.
        </h3>
      </div>

      {/* International clients */}
      <div className="Client__App">
        <div className="Client__title">
          <h1>INTERNATIONAL CLIENTS</h1>
        </div>
        <div className="Client__marquee-container">
          <Marquee direction="right" speed={100}>
            <div className="Client__image_wrapper">
              <img src={BARCA} width="67" height="67" alt="Barca" />
            </div>
            <div className="Client__image_wrapper">
              <img src={EXPODOHA} width="67" height="67" alt="Expo Doha" />
            </div>
            <div className="Client__image_wrapper">
              <img src={IFRC} width="67" height="67" alt="IFRC" />
            </div>
            <div className="Client__image_wrapper">
              <img src={KSA2030} width="67" height="67" alt="KSA VISION 2030" />
            </div>
            <div className="Client__image_wrapper">
              <img src={INTEL} width="67" height="67" alt="INTEL" />
            </div>
            <div className="Client__image_wrapper">
              <img src={PSG} width="67" height="67" alt="PSG" />
            </div>
            <div className="Client__image_wrapper">
              <img src={CARREFOUR} width="67" height="67" alt="Carrefour" />
            </div>
            <div className="Client__image_wrapper">
              <img src={MAJID} width="67" height="67" alt="MAJID" />
            </div>
            <div className="Client__image_wrapper">
              <img src={UNDP} width="67" height="67" alt="UNDP" />
            </div>
            <div className="Client__image_wrapper">
              <img src={HABANO} width="67" height="67" alt="HABANO" />
            </div>
            <div className="Client__image_wrapper">
              <img src={IMC} width="67" height="67" alt="IMC" />
            </div>
            <div className="Client__image_wrapper">
              <img src={OXFAM} width="67" height="67" alt="OXFAM" />
            </div>
            <div className="Client__image_wrapper">
              <img src={STC} width="67" height="67" alt="STC" />
            </div>
            <div className="Client__image_wrapper">
              <img src={CARITAS} width="67" height="67" alt="CARITAS" />
            </div>
            <div className="Client__image_wrapper">
              <img src={UNRWA} width="67" height="67" alt="UNRWA" />
            </div>
            <div className="Client__image_wrapper">
              <img src={ICMPD} width="67" height="67" alt="ICMPD" />
            </div>
            <div className="Client__image_wrapper">
              <img src={FPSC} width="67" height="67" alt="FPSC" />
            </div>
            <div className="Client__image_wrapper">
              <img src={MUSEU} width="67" height="67" alt="MUSEU" />
            </div>
            <div className="Client__image_wrapper">
              <img src={FBO} width="67" height="67" alt="FBO" />
            </div>
            <div className="Client__image_wrapper">
              <img src={TLC} width="67" height="67" alt="TLC" />
            </div>
            <div className="Client__image_wrapper">
              <img src={UN} width="67" height="67" alt="UN" />
            </div>
          </Marquee>
        </div>
      </div>

      {/* Local clients */}
      <div className="Client__App">
        <div className="Client__title">
          <h1>LOCAL CLIENTS</h1>
        </div>
        <div className="Client__marquee-container">
          <Marquee direction="right" speed={100}>
            <div className="Client__image_wrapper">
              <img src={CSRL} width="67" height="67" alt="CSRL" />
            </div>
            <div className="Client__image_wrapper">
              <img src={PACE_E_LUCEE} width="67" height="67" alt="Pace E Luce" />
            </div>
            <div className="Client__image_wrapper">
              <img src={AUB} width="67" height="67" alt="AUB" />
            </div>
            <div className="Client__image_wrapper">
              <img src={AUDI} width="67" height="67" alt="AUDI" />
            </div>
            <div className="Client__image_wrapper">
              <img src={BH} width="67" height="67" alt="BH" />
            </div>
            <div className="Client__image_wrapper">
              <img src={BIAF} width="67" height="67" alt="BIAF" />
            </div>
            <div className="Client__image_wrapper">
              <img src={BOB} width="67" height="67" alt="BOB" />
            </div>
            <div className="Client__image_wrapper">
              <img src={DALAL} width="67" height="67" alt="DALAL" />
            </div>
            <div className="Client__image_wrapper">
              <img src={IDS} width="67" height="67" alt="IDS" />
            </div>
            <div className="Client__image_wrapper">
              <img src={HALLAB} width="67" height="67" alt="HALLAB" />
            </div>
            <div className="Client__image_wrapper">
              <img src={LACPA} width="67" height="67" alt="LACPA" />
            </div>
            <div className="Client__image_wrapper">
              <img src={LRC} width="67" height="67" alt="LRC" />
            </div>
            <div className="Client__image_wrapper">
              <img src={MEDGULF} width="67" height="67" alt="MEDGULF" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Clients;
