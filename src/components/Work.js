import React from 'react';
import { projects } from '../data/projects';

export const Work = () => {
  return (
    <div className="work">
      {
        projects.map(project => {
          return(
            <article key={project.id} className='work-item'>
              <div>
                <span className='year'>{project.year}</span> | <span className='company'>{project.company}</span>
                <h2 className='title'>
                  {project.name}
                </h2>
              </div>
              <span className='type'>{project.categories}</span>
              <span className='description'>{project.description}</span>
              <span className='technologies'>{project.technology}</span>
            </article>
          );
        })
      }
    </div>
  )
}
