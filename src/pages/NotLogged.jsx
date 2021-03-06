// NPM packages
import { Link } from "react-router-dom";

export default function NotLogged() {
  return (
    <div id="not-logged">
      <h1>Sorry, you are not login</h1>
      <p>
        Please don't forget to login or create an account to access our content
      </p>
      <div className="notlogged-links">
        <Link to="/sign-up">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
