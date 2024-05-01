import React from 'react';
import { Helmet } from 'react-helmet';

export const Contact = () => {
  return (
    <>
        <Helmet>
            <title>Vianey Linares | Full Stack WordPress Developer - Contact</title>
            <meta name="description" content="Experienced full stack WordPress developer contact details, including GitHub, LinkedIn and Twitter profiles and personal e-mail." />
            <meta name="theme-color" content="#008f68" />
            <link rel="canonical" href="https://vianeylinares.com/contact" />
        </Helmet>
        <div className='contact'>
            <div className='details'>
                <h2 className='contact-title'>
                    Do you want to contact me?
                </h2>
                <p>
                    Drop me a line.<br/>
                    Feel free to contact me at my social networks or send me an e-mail.
                </p>
                <p>
                    I speak English and Spanish.
                </p>
            </div>
        </div>
    </>
  )
}
