
export default function LandingContent({ item }) {
    const { title, photo, description } = item;
   
    return (
      <div className="landing-content">  
        <img src={photo} alt={photo} />        
        <p>{description}</p>    
             
      </div>
    );
  }