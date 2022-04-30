import { useEffect, useState } from "react";

// Project files
import { readCollection } from "../scripts/fireStore";

import UserCard from "../components/UserCard";

export default function Users() {
  // Local state
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Method
  useEffect(() => {
    async function loadData() {
      const payload = await readCollection("users");
      const { data, error } = payload;

      error ? loadFail(data) : loadSucceed(data);
    }

    loadData();
  }, []);

  function loadSucceed(data) {
    setUsers(data);
    setStatus(1);
  }

  function loadFail(error) {
    console.error(error);
    setStatus(2);
  }

  // Components
  const Cards = users.map((item) => (
    <UserCard
      key={item.id}
      item={item}
      userState={[users, setUsers]}
    />
  ));

  // Safeguard
  if (status === 0) return <p>Loading... 🕕</p>;
  if (status === 2) return <p>Error... ❌</p>;

  return (
    <div id="users">
      <h1>Users</h1>
      <div className="grid">{Cards}</div>
      
    </div>
  );
}