import { useEffect, useState } from "react";

// Project files
import { readCollection } from "../scripts/fireStore";

import CourseCard from "../components/CourseCard";

export default function Courses() {
  // Local state
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  // Method
  useEffect(() => {
    async function loadData() {
      const payload = await readCollection("courses");
      const { data, error } = payload;

      error ? loadFail(data) : loadSucceed(data);
    }

    loadData();
  }, []);

  function loadSucceed(data) {
    setCourses(data);
    setStatus(1);
  }

  function loadFail(error) {
    console.error(error);
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
      <h1>Our Courses</h1>
      <div className="grid">{Cards}</div>
    </div>
  );
}
