import { useEffect, useState } from "react";

// Project files
import { readCollection } from "../scripts/fireStore";
import CourseCard from "../components/CourseCard";
import { useAuth } from "state/AuthProvider";

export default function Courses() {
  // Local state
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  const { user } = useAuth();

  // Method
  useEffect(() => {
    async function loadData() {
      const data = await readCollection("courses").catch(onFail);

      if (data) onSuccess(data);
    }

    loadData();
  }, []);

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
    <CourseCard key={item.id} item={item} courseState={[courses, setCourses]} />
  ));

  // Safeguard
  if (status === 0) return <p>Loading... 🕕</p>;
  if (status === 2) return <p>Error... ❌</p>;

  return (
    <div id="courses">
      <h1>My Courses</h1>
      <header>
        {user.isTeacher ? <h3>My teaching</h3> : <h3>My learning</h3>}
      </header>
      <div className="grid">{Cards}</div>
    </div>
  );
}
