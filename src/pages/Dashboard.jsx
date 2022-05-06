// NPM packages
import { Link } from "react-router-dom";
import { UIDProvider } from "state/UIDContext";

export default function Dashboard( ) {
  const {setUID} = UIDProvider;

  return (
    <div id="dashboard">
      <h1>Welcome to learning management system</h1>
      <Link to="/courses"> Here are your enrolled courses</Link>
      <button onClick={() => setUID(null)}>Logout</button>
    </div>
  );
}
