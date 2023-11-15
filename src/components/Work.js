import React from 'react';
import { projects } from '../data/projects';

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
                </h2>
              </div>
              <p className='type'>{project.categories}</p>
              <p className='description'>{project.description}</p>
              <p className='technologies'>
                {
                  project.technologies.map(tech => {
                    return(
                      <span>{tech}</span>
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
