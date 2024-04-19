import React from 'react';

import devopsImage from '../assets/images/Devops.png';

const Projects = () => {
  return (
    <section>
      <div className="container mx-auto px-1">
        <h3 className="text-3xl mt-20 dark:text-white">Projects</h3>
      </div>
      <div className="container mx-auto px-1">
        <div className="md:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full">
              <img
                className="mx-auto"
                src={devopsImage}
                width={800}
                height={900}
                alt="web"
              />
            </div>
            <p className="py-4 text-gray-800">
              Crafting sophisticated web solutions tailored to your
              requirements, employing a foundation in core design principles.
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://attir.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/AttiR/EChatCode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Code
              </a>
            </div>
          </div>
          
          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full">
              <img
                className="mx-auto"
                src={devopsImage}
                width={800}
                height={900}
                alt="web"
              />
            </div>
            <p className="py-4 text-gray-800">
              Crafting sophisticated web solutions tailored to your
              requirements, employing a foundation in core design principles.
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="https://attir.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/AttiR/EChatCode"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Code
              </a>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-20 dark:bg-white flex-1">
            {/* Image takes full width of the div */}
            <div className="w-full">
              <img
                className="mx-auto"
                src={devopsImage}
                width={800}
                height={900}
                alt="web"
              />
            </div>
            <p className="py-4 text-gray-800">
              Crafting sophisticated web solutions tailored to your
              requirements, employing a foundation in core design principles.
            </p>
            {/* Buttons with equal width using flex-1 */}
            <div className="flex justify-between mt-4 gap-20">
              <a
                href="#live-preview"
                className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Live Preview
              </a>
              <a
                href="#code"
                className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
