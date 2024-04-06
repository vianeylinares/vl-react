import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <div className='socials'>
                <Link to="https://github.com/vianeylinares/" target="_blank" rel="nofollow">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to="mailto:me@vianeylinares.com" target="_blank" rel="nofollow">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link to="https://linkedin.com/in/vianeylinares/" target="_blank" rel="nofollow">
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link to="https://twitter.com/vl_devs/" target="_blank" rel="nofollow">
                    <FontAwesomeIcon icon={faTwitter} />
                </Link>
            </div>
    </div>
  )
}
