// Project files
import { deleteDocument, updateDocument } from "../scripts/fireStore";

export default function UserCard({ item, userState }) {
  const { id, active, name, age, imageURL } = item;
  const [users, setUsers] = userState;

  // Method
  function changeActive() {
    const editedItem = { ...item };

    editedItem.active = !editedItem.active;
    onUpdate(editedItem);
  }

  async function onUpdate(editedItem) {
    const payload = await updateDocument("users", editedItem);
    const { data, error } = payload;

    error ? updateFail(data) : updateSucceed(editedItem);
  }

  function updateSucceed(editedItem) {
    const clonedUsers = [...users];
    const index = clonedUsers.findIndex((item) => item.id === editedItem.id);

    clonedUsers[index] = editedItem;
    setUsers(clonedUsers);
    alert("Updated succeesfully");
  }

  function updateFail(data) {
    console.error(data);
    alert("Sorry we cannot update your driver. Try again");
  }

  async function onDelete(id) {
    const payload = await deleteDocument("users", id);
    const { data, error } = payload;

    error ? deleteFail(data) : deleteSucceed();
  }

  function deleteSucceed() {
    const clonedUsers = [...users];
    const index = clonedUsers.findIndex((item) => item.id === id);

    clonedUsers.splice(index, 1);
    setUsers(clonedUsers);
    alert("Deleted succeesfully");
  }

  function deleteFail(error) {
    console.log(error);
    alert("We could not modify the driver. Try again");
  }

  return (
    <article className="user-card">
      <img src={imageURL} alt="Driver portrait" />
      <h3>{name}</h3>
      <p> {age}</p>
      <label>
        Is currently driving?
        <input type="checkbox" checked={active} onChange={changeActive} />
      </label>
      <button onClick={() => onDelete(id)}>Delete</button>
      
    </article>
  );
}

