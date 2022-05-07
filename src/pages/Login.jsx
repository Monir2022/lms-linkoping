// NPM packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import form from "../data/loginForm.json";
import { loginUser } from "../scripts/firebaseAuth";

export default function Login({ uidState }) {
  const [uid, setUID] = uidState;

  const navigation = useNavigate();

  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Method
  async function onLogin(event) {
    event.preventDefault();

    const returningUID = await loginUser(email, password);

    if (returningUID) {
      setUID(returningUID);
      navigation("/courses");
    }
  }

  return (
    <div id="login">
      <p>Please login to access all our content</p>
      <form onSubmit={onLogin}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Submit</button>
        <Link to="/recover-password">Recover password</Link>
      </form>
    </div>
  );
}
