
import "./Services.css"


const projectData= [
    {
        title:"Front-end project",
        project:["Netflix Clone","Sk travels clone","Kids App","Photo Gallery"],
       
    }, 
    {
        title:"Back-end project",
        project:["No projects now still working"]
    },
    {
        title:"UI/UX Designer",
        project:["No projects now still working"]
    }
     
]



function Projects(props) {
  
 
    
    
    return(
       
        <>
              
            {/* <div className='ser-wrapper'> */}
               
                    <div className='ser-card'>
                        
                        <h1>{props.title}</h1>

                        <div className="projects">
                            <h5>Projects</h5>
                            <ul>
                                
                                {props.projects.map((item,index,)=>(
                                  
                                    <li key={index}><a href="#">{item}</a></li>
                                    
                                ))}
                            </ul>
                        </div>
                        
                    
                    </div>
                


            {/* </div> */}
            </>


    
    )
 }

function Services() {
    return (
        
      <>
        <section className='service-container' id='services-section'>
       {projectData.map((project,index)=>(
        <Projects   key={index}  title ={project.title}
                                 projects={project.project}
                                 />
       ))}
       </section>
       </>
    )
}

    

export default Services
