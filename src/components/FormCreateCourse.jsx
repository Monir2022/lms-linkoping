import { useState } from "react";

// Project files
import InputField from "./InputField";
import form from "data/formCategory.json";
import { createDocumentWithId, readDocument } from "scripts/fireStore";

import { useCourses } from "state/CoursesContext";
import { useModal } from "state/ModalContext";

export default function FormCreateCourse() {
  // Global state
  const { courses, setCourses } = useCourses();
  const { setModal } = useModal();

  // Local state
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    
    // 2 If it does exist we upload
    const course = { title: title };
    const id = title;
    const isDone = await createDocumentWithId("courses", id, course).catch(
      onFail
    );

    if (isDone) onSucess(course, id);
  }

  function onSucess(course, id) {
    course.id = id;
    setCourses([...courses, course]);
    setModal(null);
  }

  function onFail(error) {
    console.error(error);
    alert("Could not create a document, check that the name is not reapeated.");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add a course</h2>
      <InputField setup={form.title} state={[title, setTitle]} />
      <InputField setup={form.text} state={[text, setText]} />
      <button>Add a new course</button>
    </form>
  );
}
