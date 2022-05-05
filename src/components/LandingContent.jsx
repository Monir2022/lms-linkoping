
export default function LandingContent({ item }) {
    const { photo, description } = item;
   
    return (
      <div className="landing-content">  
        <img src={photo} alt=" " />        
        <p>{description}</p>    
             
      </div>
    );
  }