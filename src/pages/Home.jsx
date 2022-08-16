import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/new/header";
import { Future } from "../components/new/future";
import { Cover } from "../components/new/cover";
import { Income } from "../components/new/Income";
import { Services } from "../components/services";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Future data={landingPageData.future} />
      <Cover data={landingPageData.cover} />
      <hr/>
      <Income data={landingPageData.income} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default Home;
