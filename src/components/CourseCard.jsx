// Project files
import { deleteDocument, updateDocument } from "../scripts/fireStore";

export default function CourseCard({ item, courseState }) {
  const { id, active, title ,duration, imageURL, description } = item;
  const [courses, setCourses] = courseState;

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
    const clonedCourses = [...courses];
    const index = clonedCourses.findIndex((item) => item.id === editedItem.id);

    clonedCourses[index] = editedItem;
    setCourses(clonedCourses);
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
    const clonedCourses = [...courses];
    const index = clonedCourses.findIndex((item) => item.id === id);

    clonedCourses.splice(index, 1);
    setCourses(clonedCourses);
    alert("Deleted succeesfully");
  }

  function deleteFail(error) {
    console.log(error);
    alert("We could not modify the driver. Try again");
  }

  return (
    <article className="course-card">
      <img src={imageURL} alt="Driver portrait" />
      <h3>{title}</h3>
      <p> Duration: {duration} months</p>
      <p>{description}</p>
      <label>
        Is currently driving?
        <input type="checkbox" checked={active} onChange={changeActive} />
      </label>
      <button onClick={() => onDelete(id)}>Delete</button>
      
    </article>
  );
}

