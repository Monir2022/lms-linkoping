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
    const payload = await loginUser(email, password);
    const { data, error } = payload;
    error === true ? onFailure(data) : onSucess(data);
  }

  function onSucess(data) {
    setUID(data);
    navigation("/dashboard");
  }

  function onFailure(errorText) {
    console.error(errorText);
    alert(`Sorry something happened: ${errorText}`);
  }
  return (
    <div id="login">
      <header>
        <h3>Login to LMS linkoping</h3>
      </header>      
      <form onSubmit={onLogin}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Submit</button>               
        <Link to="/signup">Sign up</Link>
        <Link to="/">Landing page</Link>        
        <Link to="/recover-password">Forget password</Link>      
      </form>      
    </div>
  );
}
