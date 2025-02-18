import React from 'react';
import { Helmet } from 'react-helmet';

export const Services = () => {
  return (
    <>
        <Helmet>
            <title>Vianey Linares | WordPress Developer - Services</title>
            <meta name="description" content="Full stack WordPress developer services list." />
            <meta name="theme-color" content="#008f68" />
            <link rel="canonical" href="https://vianeylinares.com/services" />
        </Helmet>
        <div className="services">
            <h2>Services</h2>
            <div class="service-item">
                <h3>
                    WordPress development
                </h3>
                <ul>
                    <li>Websites based on existing HTML template</li>
                    <li>Websites based on premium and child themes</li>
                    <li>Websites starting from scratch</li>
                    <li>Websites based on Elementor builder</li>
                    <li>WooCommerce stores</li>
                    <li>Theme and plugin development</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>
                    Website modification
                </h3>
                <ul>
                    <li>WordPress based</li>
                    <li>PHP based</li>
                    <li>HTML, CSS, JS based</li>
                </ul>
            </div>
            <div class="service-item">
                <h3>
                    Website fixing and restore
                </h3>
                <ul>
                    <li>WordPress based</li>
                </ul>
            </div>
        </div>
    </>
  )
}
