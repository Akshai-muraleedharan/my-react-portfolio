import React from 'react'
import "./About.css"
function About() {
  return (
    <section  className='container-about'>
        <h1>About</h1>
      <div className='wrapper-about grid-about'>
        
         <div className='about-content'>
          
            
          <h2 className='experience'>Experience</h2>
          <h2>FullStack web developer: <span>Fre<span style={{color:"#fff"}}>sh</span>er;</span></h2>
          <h2>UI/UX designer: <span className='secondspan'>F<span style={{color:"#fff"}}>re</span>sher;</span></h2>
         
         <div className='qualification'>
         <h2>Qualification</h2>
         <ol>
            <li>S.S.L.C - G.H.S.S AMARAVTHY</li>
            <li>H.S.S - G.H.S.S ANAKKARA</li>
            <li>Graduation - b.com finance and taxation - Holly cross college puttady</li>
         </ol>
         </div>

         </div>

         <div className='skill'>
           <h2>Skills</h2>

             <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>BOOTSTRAP</li>
              <li>React</li>
             </ul>
         </div>
      </div>
    </section>
  )
}

export default About