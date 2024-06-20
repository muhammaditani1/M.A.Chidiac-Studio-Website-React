import Services from "./components/services/Services";
import LandingPage from "./components/home/Home";
import NavBar from "./components/navBar/NavBar.jsx";
import About from "./components/about/About.jsx";
import Clients from "./components/about/Clients.jsx";
import WorkGrid from "./components/work/WorkGrid.jsx";
import Inquire from "./components/inquire/Inquire.jsx";
import InquireInfo from "./components/inquire/InquireInfo.jsx";
import Map from "./components/inquire/Map.jsx";
import Footer from "./components/footer/Footer.jsx";
import LandbotChat from "./components/landbot/Landbot.jsx";
import Place from "./components/place/Place.jsx";
import CookiePopup from "./components/cookies/Cookie.jsx";
import Culture from "./components/culture/Culture.jsx";
import NewsletterForm from "./components/newsletter/NewsLetter.jsx";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <LandingPage />
        <About />
        <Clients />
        <Services />
        <Place />
        <WorkGrid />
        <Inquire />
        <Culture />
        <NewsletterForm />
        <InquireInfo />
        <Map />
        <LandbotChat />
      </main>
      <footer>
        <Footer />
      </footer>
      <CookiePopup />
    </>
  );
}

export default App;
