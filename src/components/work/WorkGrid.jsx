import {useState} from 'react';
import { Work_Data } from "./PortfolioData";
import "./WorkGrid.css";
import { Bounce, Rotate } from "react-awesome-reveal";

export default function WorkGrid() {
  const [selectedContentType, setSelectedContentType] = useState("");
  const [isDistributed, setIsDistributed] = useState(false);
  const [filterType, setFilterType] = useState("All-Work");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const toggleLayout = () => {
    setIsDistributed(!isDistributed);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleContentOpen = (item) => {
    let url;
    switch (item.contentType) {
      case "youtube":
        url = `https://www.youtube.com/embed/${item.content}`;
        break;
      case "vimeo":
        url = `https://player.vimeo.com/video/${item.content}`;
        break;
      case "image":
        url = item.image2; // Assuming item.image2 is the URL to the image

        break;
      case "pdf":
        url = item.content; // URL to the PDF file
        break;
      case "web":
        url = item.content;
        break;
      default:
        url = "";
    }
    setSelectedVideoUrl(url);
    setSelectedContentType(item.contentType); // Setting the content type
    setModalOpen(true);
  };

  const handleVideoClose = () => {
    setModalOpen(false);
    setSelectedVideoUrl("");
    setSelectedContentType(""); // Clearing the content type state
  };

  const filteredData = Work_Data.filter(
    (item) => filterType === "All-Work" || item.type === filterType
  );

  return (
    <section id="work">
      <div>
        <Bounce delay={500}>
          <h1 className="Work-Titles">Work</h1>
        </Bounce>
        <Rotate delay={900}>
          <h3 className="Work-Title-Description">A Glimpse of What We Do</h3>
        </Rotate>

      </div>

      <div className="work-nav">
        <button
          onClick={() => handleFilterChange("All-Work")}
          className={filterType === "All-Work" ? "active" : null}
        >
          ALL WORK
        </button>

        <button
          onClick={() => handleFilterChange("VIDEO")}
          className={filterType === "VIDEO" ? "active" : null}
        >
          VIDEO
        </button>

        <button
          onClick={() => handleFilterChange("DESIGN")}
          className={filterType === "DESIGN" ? "active" : null}
        >
          DESIGN
        </button>

        <button
          onClick={() => handleFilterChange("APP")}
          className={filterType === "APP" ? "active" : null}
        >
          APP/WEB
        </button>

        <button
          onClick={() => handleFilterChange("ANIMATION")}
          className={filterType === "ANIMATION" ? "active" : null}
        >
          ANIMATION
        </button>

        <button
          onClick={() => handleFilterChange("SOCIAL MEDIA")}
          className={filterType === "SOCIAL MEDIA" ? "active" : null}
        >
          SOCIAL MEDIA
        </button>

        <button
          onClick={() => handleFilterChange("ARCH")}
          className={filterType === "ARCH" ? "active" : null}
        >
          ARCHITECTURAL VISUALIZATION
        </button>
      </div>
      <div
        className={`work-card-stacks ${
          isDistributed ? "distributed" : "stacked"
        }`}
        onClick={() => toggleLayout()}
      >
        {filteredData.map((item, index) => (
          <div
            className="work-card"
            key={index}
            style={{ "--i": index + 1 }}
            onClick={() => handleContentOpen(item)}
          >
            <a>
              <div className="work-image">
                <img src={item.image} alt={item.title} />
                <div className="work-intro">
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-desc">{item.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="video-modal" onClick={handleVideoClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedContentType === "pdf" ? (
              <object
                data={selectedVideoUrl}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>Your browser does not support PDFs.</p>
              </object>
            ) : selectedContentType === "image" ? (
              <img
                src={selectedVideoUrl}
                alt="Modal Content"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <iframe
                src={selectedVideoUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Embedded content"
                style={{ width: "100%", height: "100%" }} // Ensure iframe fills modal-content
              ></iframe>
            )}
          </div>
          <button className="modal-close-button" onClick={handleVideoClose}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}
