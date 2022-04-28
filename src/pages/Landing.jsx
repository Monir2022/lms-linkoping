// NPM Packages
import { Link } from "react-router-dom";

// Project files

import ContentItem from "../components/ContentItem";
import JSONContent from "../data/landing-content.json";

export default function Landing() {
  const Content = JSONContent.map((item) => (
    <ContentItem key={item.id} item={item} />
  ));
  return (
    <div id="landing">
      <header>
        <div className="logo">
          
        </div>
        <h1>OpenEyes e-learning</h1>
      </header>
      <section className="content">
        <h2>
          OpenEyes is a free online learning platform that offers courses about
          indigenous cultures around the world
        </h2>
        {Content}
        <Link to="/home">Start Now</Link>
      </section>
    </div>
  );
}