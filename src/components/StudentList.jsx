//NPM packages
import { useEffect, useState } from "react";
//Project files
import { readCollection } from "../scripts/fireStore";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  //Component
  const studentList = students.map((student) => {
    return <li key={student.id}>{student.name}</li>;
  });

  //Methods
  useEffect(() => {
    async function loadData() {
      const data = await readCollection("users");
      setStudents(data);
    }
    loadData();
  }, []);

  return (
    <div className="student-list">
      <h3>Here are list of the students who are enrolled to lms linkoping</h3>
      <ul>{studentList}</ul>
    </div>
  );
}
