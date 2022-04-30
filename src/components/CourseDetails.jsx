

export default function CourseDetails( item) {
    const {title, details,link} = item
    
    
  return (
    <section id ="course-details">
        <h3>{title}</h3>
        <p>{details}</p>
        <p>Website: {link}</p>
    </section>
  )
}
