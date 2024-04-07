import React from 'react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vianey Linares - Web Developer</title>
        <meta name="description" content="Web developer, website fixer, WordPress and Internet enthusiast." />
        <meta name="theme-color" content="#008f68" />
        <link rel="canonical" href="https://vianeylinares.com/" />
      </Helmet>
      <div className="home">
        <div className='welcome'>
          <h2>Welcome</h2>
          <p>
            Hi, I am Vianey. I am passionate about technology, web development and solving problems.
          </p>
        </div>
      </div>
    </>
  )
}
