import React from 'react';

import EidSalesImage from '../assets/images/Eid-sales.jpeg';
import PowerBIImage from '../assets/images/Power-bi.jpeg';
import EventDataImage from '../assets/images/Event-data.jpeg';
import CarnationImage from '../assets/images/Carnation.jpeg';
import PortfolioImage from '../assets/images/Portfolio.jpeg';
import BreweriesImage from '../assets/images/Breweries app.jpeg';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto px-1">
        <h3 className="text-4xl text-center mt-20 dark:text-white">Projects</h3>
      </div>
      <div className="container mx-auto px-1">
        <div className="md:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            <div className="w-full" style={{ width: '400px', height: '250px' }}>
              <img
                className="mx-auto h-full w-full object-cover"
                src={EventDataImage}
                alt="web"
              />
            </div>
            <p className="py-4">
              <span className="text-teal-800 tracking-wider">
                Data Warehouse:{' '}
              </span>
              <span className="text-gray-800 tracking-wider">
                Collecting diverse event-based data, centralizing storage for
                CRM, marketing, and visualization tools.
              </span>
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://github.com/Kinzali/Event-data-tracking"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Details
              </a>
            </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full" style={{ width: '400px', height: '250px' }}>
              <img
                className="mx-auto h-full w-full object-cover"
                src={EidSalesImage}
                alt="web"
              />
            </div>

            <p className="py-4">
              <span className="text-teal-800 tracking-wider">
                Python Sales Analysis:{' '}
              </span>
              <span className="text-gray-800 tracking-wider">
                Enhance Eid sales performance through customer service insights
                and sales optimization.
              </span>
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://github.com/Kinzali/Eid-Sales-Analysis"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Details
              </a>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full" style={{ width: '400px', height: '250px' }}>
              <img
                className="mx-auto h-full w-full object-cover"
                src={PowerBIImage}
                alt="web"
              />
            </div>
            <p className="py-4">
              <span className="text-teal-800 tracking-wider">
                Power BI project:{' '}
              </span>
              <span className="text-gray-800 tracking-wider">
                Analyzing network insights, identifying top-performing sectors,
                and improving user throughput.
              </span>
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://github.com/Kinzali/Power-BI-Telecom-Analysis?tab=readme-ov-file"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Details
              </a>
            </div>
          </div>
        </div>
        {/* Second row for additional three projects */}
        <div className="md:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full" style={{ width: '400px', height: '250px' }}>
              <img
                className="mx-auto h-full w-full object-cover"
                src={CarnationImage}
                alt="web"
              />
            </div>
            <p className="py-4">
              <span className="text-teal-800 tracking-wider">
                Carnation App:{' '}
              </span>
              <span className="text-gray-800 tracking-wider">
                Crafted with HTML and CSS, leveraging the power of Flexbox and
                Grid to design the frontend for Carnation Company.
              </span>
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://github.com/Kinzali/Html-Css-Carnation-App"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Details
              </a>
            </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full" style={{ width: '400px', height: '250px' }}>
              <img
                className="mx-auto h-full w-full object-cover"
                src={PortfolioImage}
                alt="web"
              />
            </div>
            <p className="py-4">
              <span className="text-teal-800 tracking-wider">
                Personal Portfolio App:{' '}
              </span>
              <span className="text-gray-800 tracking-wider">
                developed with React, JavaScript and styled with Tailwind CSS,
                showcasing my skills and projects
              </span>
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://github.com/Kinzali/Portfolio-app"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Details
              </a>
            </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1 relative z-10">
            {/* Image takes full width of the div */}
            <div className="w-full" style={{ width: '400px', height: '250px' }}>
              <img
                className="mx-auto h-full w-full object-cover"
                src={BreweriesImage}
                alt="web"
              />
            </div>
            <p className="py-4">
              <span className="text-teal-800 tracking-wider">
                Breweries React App:{' '}
              </span>
              <span className="text-gray-800 tracking-wider">
                Fetches brewery data from an API and displays it on cards,
                offering details about species, locations, and storage.
              </span>
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://github.com/Kinzali/Breweries-App"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
