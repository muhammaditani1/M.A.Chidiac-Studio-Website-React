import { useState } from "react";
import "./Culture.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBriefcase,
  faPencilAlt,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons"; // Correctly import icons

export default function Culture() {
  const [selectedContent, setSelectedContent] = useState("workshops");

  function onHandleContentSelect(content) {
    setSelectedContent(content);
  }

  return (
    <section id="culture">
      <div className="culture-Titles">
        <h1>Culture</h1>
      </div>
      <div className="culture-nav">
        <button
          onClick={() => onHandleContentSelect("workshops")}
          className={selectedContent === "workshops" ? "active" : ""}
        >
          <div class="alt-tabs-icon">
            <span class="icon-gears"></span>
          </div>
          WORKSHOPS
        </button>
        <button
          onClick={() => onHandleContentSelect("workwithus")}
          className={selectedContent === "workwithus" ? "active" : ""}
        >
          <div class="alt-tabs-icon">
            <span class="icon-briefcase"></span>
          </div>
          APPLY
        </button>
        <button
          onClick={() => onHandleContentSelect("internships")}
          className={selectedContent === "internships" ? "active" : ""}
        >
          <div class="alt-tabs-icon">
            <span class="icon-pencil"></span>
          </div>
          INTERNSHIPS
        </button>
        <button
          onClick={() => onHandleContentSelect("activism")}
          className={selectedContent === "activism" ? "active" : ""}
        >
          <div class="alt-tabs-icon">
            <span class="icon-megaphone"></span>
          </div>
          ACTIVISM
        </button>
      </div>
      <div className="culture-content">
        {selectedContent === "workshops" && (
          <>
            <div>
              <h2>
                A people without the knowledge of their past history, origin and
                culture is like a tree without roots.
              </h2>
              <h3>- MARCUS GARVEY</h3>
            </div>
            <div>
              <p>
                “Animation over Coffee or Tea” is an annual workshop that we
                hold at our agency. During the workshop, we tend to come up with
                a project or a campaign and execute it from A to Z in order for
                everyone attending to have a clearer idea about how the creative
                industry works.
              </p>
            </div>
            <div>
              <p>
                Check out our blog and social media pages or sign up for our
                newsletter for news regarding our next workshop!
              </p>
            </div>
          </>
        )}
        {selectedContent === "workwithus" && (
          <>
            <div>
              <h2>
                A people without the knowledge of their past history, origin and
                culture is like a tree without roots.
              </h2>
              <h3>- MARCUS GARVEY</h3>
            </div>
            <div>
              <p>
                Feel like you got what it takes to join our team? Send your CV
                and portfolio to careers@machidiac.com. You can also check our
                social media pages for job openings.
              </p>
            </div>
            <div>
              <p>
                Due to the overwhelming amount of emails that we receive, we
                might not get back to you instantly. However, rest assured that
                we will go over your portfolio, and if we see that there’s a
                place for you at our agency, we will contact you.
              </p>
            </div>
          </>
        )}
        {selectedContent === "internships" && (
          <>
            <div>
              <h2>
                A people without the knowledge of their past history, origin and
                culture is like a tree without roots.
              </h2>
              <h3>- MARCUS GARVEY</h3>
            </div>
            <div>
              <p>
                If you are still a student or a fresh grad, you can join our
                internship program. Send your CV and portfolio to
                careers@machidiac.com and we’ll let you know if there are
                available places.
              </p>
            </div>
            <div>
              <p>
                Due to the health and safety issues during the COVID-19
                pandemic, all internship programs are suspended. We will keep
                you updated on this situation on our social media pages.
              </p>
            </div>
          </>
        )}
        {selectedContent === "activism" && (
          <>
            <div>
              <h2>
                A people without the knowledge of their past history, origin and
                culture is like a tree without roots.
              </h2>
              <h3>- MARCUS GARVEY</h3>
            </div>
            <div>
              <p>
                We are keen to giving back to the community. We do so by
                implementing and participating in social and cultural projects
                and activities that serve to improve our society. We move beyond
                words and into action, making a harmonious coexistence with the
                earth and society our responsibility.
              </p>
            </div>
            <div>
              <p>
                We also implement a healthy office environment by making the
                most of natural light, utilizing solar energy, maximizing
                computer efficiency and going paperless when possible.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
