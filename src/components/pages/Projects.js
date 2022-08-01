import Project from "../Project";
const projects = require('../../datas/projects.json')

export default function Projects() {

    const renderProjects = () => {
        const projectsArray = []

        for (let p in projects) {
            projectsArray.push(<Project key={projects[p].title} project={projects[p]}/>)
        }

        return projectsArray;
    }
    
    return <>
        <h1>
            Projects
        </h1>
        <div className='content'>
          {renderProjects()}
        </div>
    </>
}