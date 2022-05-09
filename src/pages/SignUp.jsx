// NPM packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Project files
import InputField from "../components/InputField";
import signUpForm from "../data/signUpForm.json";
import { createUser } from "../scripts/firebaseAuth";
import { createDocumentWithId } from "../scripts/fireStore";
export default function SignUp({ uidState }) {
  const [uid, setUID] = uidState;
  const navigation = useNavigate();
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [age, setAge] = useState(" ");
  const [city, setCity] = useState(" ");
  const [password, setPassword] = useState(" ");

  async function onSignUp(event) {
    event.preventDefault();
    const newUID = await createUser(email, password);
    const newUser = {
      name: name,
      age: age,
      city: city,
    };
    const payload = await createDocumentWithId("users", newUID, newUser);
    if (payload.error) alert("Could not create user");
    else {
      setUID(newUID);
      navigation("/courses");
    }
  }
  return (
    <div id="sign-up">
      <h1>Create an account</h1>
      <p>
        You will get acces to all of our content when you are ready with the
        account
      </p>
      <form onSubmit={onSignUp}>
        <InputField setup={signUpForm.name} state={[name, setName]} />
        <InputField setup={signUpForm.email} state={[email, setEmail]} />
        <InputField setup={signUpForm.age} state={[age, setAge]} />
        <InputField setup={signUpForm.city} state={[city, setCity]} />
        <InputField
          setup={signUpForm.password}
          state={[password, setPassword]}
        />
        <button>Submit</button>
      </form>
      <div className="signup-link">
        <Link to="/login">Login</Link>
        <Link to="/recover-password">Recover password</Link>
      </div>
    </div>
  );
}
