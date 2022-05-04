// NPM Packages
import { Link } from "react-router-dom";

// Project files
import LandingContent from "../components/LandingContent";
import JSONContent from "../data/landing-content.json";

export default function Landing() {
  const landingContent = JSONContent.map((item) => (
    <LandingContent key={item.id} item={item} />
  ));
  return (
    <div id="landing">
      <header>
        <div className="logo"></div>
        <h1>Welcome to LMS linkoping</h1>
      </header>
      <section className="content">
        <h2>
        LMS linkoping is a free online learning platform that offers courses about
          web development.
        </h2>
        {landingContent}
        <Link to="/login">Start Now</Link>
      </section>
    </div>
  );
}
