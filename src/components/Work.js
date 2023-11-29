import React from 'react';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Work = () => {
  return (
    <div className="work">
      {
        projects.sort((a, b) => (a.id < b.id) ? 1 : -1).map(project => {
          return(
            <article key={project.id} className='work-item'>
              <div>
                <span className='year'>{project.year}</span> | <span className='company'>{project.company}</span>
                <h2 className='title'>
                  {project.name} 
                  <span>
                    {project.url != '' && <sup><a href={project.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLink} /></a></sup>}
                    {project.github != '' && <sup><a href={project.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></sup>}
                  </span>
                </h2>
              </div>
              <p className='type'>{project.categories}</p>
              <p className='description'>{project.description}</p>
              <p className='technologies'>
                {
                  project.technologies.map((tech, item) => {
                    return(
                      <span key={item}>{tech}</span>
                    );
                  })
                }
              </p>
            </article>
          );
        })
      }
    </div>
  )
}
