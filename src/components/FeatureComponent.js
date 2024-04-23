import React from 'react';

import EidSalesImage from '../assets/images/Eid-sales.jpeg';
import PowerBIImage from '../assets/images/Power-bi.jpeg';
import EventDataImage from '../assets/images/Event-data.jpeg';
import CarnationImage from '../assets/images/Carnation.jpeg';
import PortfolioImage from '../assets/images/Portfolio.jpeg';
import BreweriesImage from '../assets/images/Breweries app.jpeg';

// Removed TypeScript interface and type annotations

const Card = ({ title, description, imageSrc, url }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    {/* Replace Next.js Image component with standard img tag */}
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-64 object-fit rounded-t-lg"
    />
    <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 tracking-wider">
      {title}
    </h3>
    <span className="text-gray-800 tracking-wider">{description}</span>
    <div className="pt-8">
      <a className="text-green-600" href={url} target="_blank" rel="noreferrer">
        Learn More {' ->'}
      </a>
    </div>
  </div>
);

const FeaturedResources = () => (
  <section id="projects">
    <div className="container mx-auto px-1 mb-20">
      <div>
        <h3 className="text-4xl text-center mt-10 mb-20 dark:text-white">
          Featured Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Card
          title="Data Warehouse"
          description="Collecting diverse event-based data, centralizing storage for
                CRM, marketing, and visualization tools."
          imageSrc={EventDataImage}
          url="https://github.com/Kinzali/Event-data-tracking"
        />
        <Card
          title="Python Sales Analysis"
          description="Enhance Eid sales performance through customer service insights
                and sales optimization."
          imageSrc={EidSalesImage}
          url="https://github.com/Kinzali/Eid-Sales-Analysis"
        />
        <Card
          title="Power BI Porject"
          description="Analyzing network insights, identifying top-performing sectors,
                and improving user throughput."
          imageSrc={PowerBIImage}
          url="https://github.com/Kinzali/Power-BI-Telecom-Analysis?tab=readme-ov-file"
        />
        <Card
          title="Carnation App"
          description="Crafted with HTML and CSS, leveraging the power of Flexbox and
                Grid to design the frontend for Carnation Company."
          imageSrc={CarnationImage}
          url="https://github.com/Kinzali/Html-Css-Carnation-App"
        />
        <Card
          title="Breweries React App"
          description="Fetches brewery data from an API and displays it on cards,
                offering details about species, locations, and storage."
          imageSrc={BreweriesImage}
          url="https://github.com/Kinzali/Breweries-App"
        />
        <Card
          title="Personal Portfolio App"
          description="Portfolio app developed with React, JavaScript and styled with Tailwind CSS,
                showcasing my skills and projects."
          imageSrc={PortfolioImage}
          url="https://github.com/Kinzali/Portfolio-app"
        />
      </div>
    </div>
  </section>
);

export default FeaturedResources;
