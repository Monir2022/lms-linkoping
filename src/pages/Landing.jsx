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
        <div className="logo">
          <img src="lms logo.png" alt=" " />
        </div>
        <h1>Welcome to LMS linkoping</h1>
      </header>
      <section className="content">
        <h3>
          LMS linkoping is a free online learning platform that offers courses
          about web development. You need to login to get access all of our
          content
        </h3>
        {landingContent}
        <div className="landing-button">
          <Link to="/sign-up">Start Now</Link>
        </div>
      </section>
    </div>
  );
}
