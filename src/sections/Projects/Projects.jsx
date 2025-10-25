import React from "react"; 
import styles from "./ProjectsStyles.module.css";
import studynestLogo from "../../assets/studynestLogo.png";


function Projects() {
  return(

   <section   id="projects"  className={styles.container}> 
   <h1 className="sectionTitle ">Projects</h1>  
   <div className={styles.projectsContainer}  >
   <a href=" https://github.com/Sajja-abdulqader/studynest" target="_blank">
   <img className={styles.img} src={studynestLogo} alt="studynest Logo"/>
   <h3>StudyNest</h3>
   <p>Educational Website -Graduation project- </p>
   </a>
   </div>
  </section>

);
    
}

export default Projects;
