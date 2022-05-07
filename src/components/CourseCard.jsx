export default function CourseCard({ item, loggedUser }) {
  const { title, duration, details, description } = item;

  return (
    <article className="course-card">
      <h3>{title}</h3>
      <p> Duration: {duration} months</p>
      <p>{description}</p>
      <p>{details}</p>

      {loggedUser?.isTeacher && <button>Delete</button>}
      {loggedUser?.isTeacher && <button>Update</button>}
    </article>
  );
}
