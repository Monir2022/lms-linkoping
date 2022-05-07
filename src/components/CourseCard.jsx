//Project files
import { useModal } from "state/ModalContext";
import FormCreateCourse from "./FormCreateCourse";

export default function CourseCard({ item, loggedUser }) {
  const { title, duration, details, description } = item;
  const {Modal, setModal}= useModal();

  return (
    <article className="course-card">
      <h3>{title}</h3>
      <p> Duration: {duration} months</p>
      <p>{description}</p>
      <p>{details}</p>
      {loggedUser?.isTeacher && <button onClick={()=>setModal(<FormCreateCourse/>)}>Add</button>}
      {loggedUser?.isTeacher && <button>Update</button>}
    </article>
  );
}
