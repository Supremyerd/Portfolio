import { useState } from 'react'
import '../styles/projects.scss'

export default function Project({project}) {

    const [showText, setShowText] = useState(false);

    const renderProjectData = () => {
        if (showText)
            return <a href={project.link} rel="noreferrer" target="_blank">
                <div className='aboutProject' style={{overflow: 'scroll'}}>   
                        <h1>{project.title + ' ' + project.version}</h1>
                    <p className='text-start'>
                        {project.description}
                    </p>
                </div>
            </a>
    }

    const setShowTextHandler = (e) => {
        setShowText(!showText)
    }
    
    return <div className="project" onMouseEnter={setShowTextHandler} onMouseLeave={setShowTextHandler}>
            {renderProjectData()}
            <div className="img">
                <img style={{height: project.img.height || '100px', width: project.img.width || '100px'}} src={project.img.url} alt={project.title + ' image'}>
                </img>
            </div>
    </div>
};