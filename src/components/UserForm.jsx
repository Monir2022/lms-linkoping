// NPM package
import { useState } from "react";

// Project files
import form from "../data/userForm.json";
import { createDocument } from "../scripts/fireStore";
import InputField from "./InputField";

export default function UserForm({ usersState }) {
  const [users, setUsers] = usersState;

  // Local state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  

  async function onCreate(event) {
    event.preventDefault();

    const newUser = {
      name: name,
      age: age,
     
      active: false,
    };
    const payload = await createDocument("users", newUser);
    const { data, error } = payload;

    error ? createFail(data) : createSucceed(newUser, data);
  }

  function createSucceed(user, id) {
    user.id = id;
    setUsers([...users, user]);
  }

  function createFail(error) {
    console.error(error);
    alert("Sorry, we could not add a new driver. Please try again");
    resetForm();
  }

  function resetForm() {
    setName("");
    setAge("");
    
  }

  return (
    <form onSubmit={onCreate}>
      <h2>Add a new course</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.age} state={[age, setAge]} />      
      
      <button>Submit</button>
      <button onClick={resetForm}>Reset</button>
    </form>
  );
}