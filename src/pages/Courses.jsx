import { useEffect, useState } from "react";
// Project files
import { readCollection, readDocument } from "../scripts/fireStore";
import FormCreateCourse from "components/FormCreateCourse";
import CourseCard from "../components/CourseCard";
import { onAuthStateChanged } from "firebase/auth";
import StudentList from "components/StudentList";
import { useModal } from "state/ModalContext";
import { authentification } from "../scripts/firebase";

export default function Courses() {
  const {modal, setModal} = useModal();
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

  const coursefunc = () => {
    setTab(true);
  };
  const listfunc = () => {
    setTab(false);
  };

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
    <CourseCard
      key={item.id}
      loggedUser={loggedUser}
      item={item}
      courseState={[courses, setCourses]}
    />
  ));
  // Safeguard
  if (status === 0) return <p>Loading... 🕕</p>;
  if (status === 2) return <p>Error... ❌</p>;

  return (
    <div id="courses">
      {loggedUser.isTeacher && (
        <div>
          <button onClick={coursefunc}>My Courses</button>
          <button onClick={listfunc}>Student List</button>
        </div>
      )}
      <p> Hi, you have logged in as  {loggedUser.name}</p>
      {tab ? <div className="grid">{Cards}</div> : <StudentList />}
      {loggedUser?.isTeacher && <button onClick={()=>setModal(<FormCreateCourse/>)}>Add</button>}
      {loggedUser?.isTeacher && <button>Update</button>}
    </div>
  );
}
