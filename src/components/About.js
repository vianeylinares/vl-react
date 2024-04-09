import React from 'react';
import { Helmet } from 'react-helmet';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>Vianey Linares | Full Stack WordPress Developer - About</title>
        <meta name="description" content="Freelance full-stack WordPress developer experienced in approaching diverse types of web projects. Also, fairly experienced in modifying and fixing websites." />
        <meta name="theme-color" content="#008f68" />
        <link rel="canonical" href="https://vianeylinares.com/about" />
      </Helmet>
      <div className="about">
        <h2>About</h2>
        <div className='details'>
          <p className='strong italic'>
            During my career, I have worked in different industries solving diverse problems.
          </p>
          <p>
            I have built simple and complex applications, websites, and blogs, covering WooCommerce stores and multilingual websites.<br/>
            Also, I have developed custom WordPress plugins and themes.
          </p>
          <p>
            Besides working with WordPress, I have also worked with other technologies such as Drupal, Shopify, CodeIgniter and React.
          </p>
          <p className='margin-bottom-p'>
            I have also performed website maintenance and correction of functionality problems.
          </p>
          <p className='strong italic'>
            Besides being a developer...
          </p>
          <p>
            I love cooking, drawing, reading and writing. Also, I love movies and TV Series.
          </p>
          <p>
            I like working out and walking my dog.
          </p>
        </div>
      </div>
    </>
  )
}
