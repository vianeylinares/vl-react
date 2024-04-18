import React from 'react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vianey Linares | Full Stack WordPress Developer</title>
        <meta name="description" content="Freelance full stack WordPress developer and website fixer. Experienced in building different types of websites, WooCommerce stores, and application plugins." />
        <meta name="theme-color" content="#008f68" />
        <link rel="canonical" href="https://vianeylinares.com/" />
      </Helmet>
      <div className="home">
        <div className='welcome'>
          <h2>Welcome</h2>
          <p>
            Hi, I am Vianey. I am passionate about technology, web development and solving problems. Currently, I work as a full stack WordPress developer.
          </p>
        </div>
      </div>
    </>
  )
}
