import "./InquireInfo.css";

export default function InquireInfo() {
  return (
    <section id="inquire-info" className="inquire-info-body">
      <div className="inquire-info-container">
        <h2 className="inquire-info-title">Contact</h2>
        <h3 className="inquire-info-sub-title">
          Opening Hours: Monday to Friday 9 a.m. to 5 p.m. EET
        </h3>
        <div className="main-info-container">
          <div className="info-container">
            <div className="sub-container">
              <div className="inquire-info-item">
                <div className="ci-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="ci-title">Phone</div>
                <div className="ci-text">+961 1 315557</div>
              </div>
            </div>
            <div className="sub-container">
              <div className="inquire-info-item">
                <div className="ci-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="ci-title">Address</div>
                <div className="ci-text">
                  N.D. de Saidnaya Street, <br />
                  Boubess Trading Center,
                  <br /> 2nd Floor, Mar Elias,
                  <br /> Beirut, Lebanon
                </div>
              </div>
            </div>
            <div className="sub-container">
              <div className="inquire-info-item">
                <div className="ci-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="ci-title">Email</div>
                <div className="ci-text">
                  <a href="mailto:info@machidiac.com">info@machidiac.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
