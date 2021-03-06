//NPM Packages
import { useEffect, useState } from "react";
// Project files
import { readCollection, readDocument } from "../scripts/fireStore";
import CourseCard from "../components/CourseCard";
import { onAuthStateChanged } from "firebase/auth";
import StudentList from "components/StudentList";
import { authentification } from "../scripts/firebase";

export default function Courses() {
  // Local state
  const [courses, setCourses] = useState([]);
  const [tab, setTab] = useState(true);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const [loggedUser, setLoggedUser] = useState({});
  // Method
  useEffect(() => {
    async function loadData() {
      const data = await readCollection("courses").catch(onFail);
      if (data) onSuccess(data);
    }
    loadData();
    onAuthStateChanged(authentification, async (user) => {
      if (user) {
        const user_data = await readDocument("users", user.uid);
        setLoggedUser(user_data);
      } else console.log("AuthProvider user signed out");
    });
  }, []);
  function viewCourseList() {
    setTab(true);
  }
  function viewStudentList() {
    setTab(false);
  }
  function onSuccess(data) {
    setCourses(data);
    setStatus(1);
  }
  function onFail(error) {
    console.error(error.code);
    setStatus(2);
  }
  // Components
  const Cards = courses.map((item) => (
    <CourseCard key={item.id} loggedUser={loggedUser} item={item} />
  ));
  // Safeguard
  if (status === 0) return <p>Loading... 🕕</p>;
  if (status === 2) return <p>Error... ❌</p>;
  return (
    <div id="courses">
      {loggedUser.isTeacher && (
        <div>
          <button onClick={viewCourseList}>My Courses</button>
          <button onClick={viewStudentList}>Student List</button>
        </div>
      )}
      <p> Hi, you have logged in as {loggedUser.name}</p>
      {tab ? <div className="grid">{Cards}</div> : <StudentList />}
    </div>
  );
}
