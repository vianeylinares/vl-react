import React from 'react';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

export const Work = () => {
  return (
    <>
      <Helmet>
        <title>Vianey Linares | WordPress Developer - Portfolio</title>
        <meta name="description" content="Full stack WordPress developer portfolio listing a diversity of WordPress projects. Also, listing web projects built with other technologies." />
        <meta name="theme-color" content="#008f68" />
        <link rel="canonical" href="https://vianeylinares.com/work" />
      </Helmet>
      <div className="work">
        <h2>Portfolio</h2>
        {
          projects.sort((a, b) => (a.id < b.id) ? 1 : -1).map(project => {
            return(
              <article key={project.id} className='work-item'>
                <div>
                  <span className='year'>{project.year}</span> | <span className='company'>{project.company}</span>
                  <h3 className='title'>
                    {project.name} 
                    <span>
                      {project.url !== '' && <sup><a href={project.url} target="_blank" rel="nofollow" title={project.name + ' online page'}><FontAwesomeIcon icon={faExternalLink} /></a></sup>}
                      {project.github !== '' && <sup><a href={project.github} target="_blank" rel="nofollow" title={project.name + ' GitHub repository'}><FontAwesomeIcon icon={faGithub} /></a></sup>}
                    </span>
                  </h3>
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
    </>
  )
}
