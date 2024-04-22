import React from 'react';
import webImage from '../assets/images/code.png';
import dataImage from '../assets/images/data.png';
import devopsImage from '../assets/images/Devops.png';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-1">
        <h3 className="text-4xl text-center py-3  dark:text-white">
          Skills / Services I offer
        </h3>
      </div>
      <div className="container mx-auto px-1">
        <div className="md:flex gap-10">
          <div className="text-center  p-10 my-20 dark:bg-white flex-1">
            <img
              className="mx-auto"
              src={webImage}
              width={100}
              height={100}
              alt="web"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800">
              Web development
            </h3>
            <h4 className="py-4 text-teal-600">Technologies I Use</h4>
            <p className="text-gray-800 py-1">HTML, CSS, Tailwind CSS</p>
            <p className="text-gray-800 py-1">
              React, JavaScript, TypeScript, Deno
            </p>
            <p className="text-gray-800 py-1">SQL, PostGreSQL</p>
          </div>

          {/* Data Analysis Section */}
          <div className="text-center  p-10  my-20 dark:bg-white flex-1">
            <img
              className="mx-auto"
              src={dataImage}
              width={100}
              height={100}
              alt="data"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800">
              Data Analyst & Data Engineering
            </h3>
            <h4 className="py-4 text-teal-600">Technologies I Use</h4>
            <p className="text-gray-800 py-1">Python, SQL, Power BI</p>
            <p className="text-gray-800 py-1">Pandas, Dash, Plotly, Seaborn</p>
            <p className="text-gray-800 py-1">
              Data Modeling, Data Warehousing
            </p>
          </div>

          {/* Consulting Section */}
          <div className="text-center  p-10  my-20 dark:bg-white flex-1">
            <img
              className="mx-auto"
              src={devopsImage}
              width={150}
              height={150}
              alt="devops"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 text-gray-800">
              DevOps
            </h3>
            <h4 className="py-4 text-teal-600">Technologies I Use</h4>
            <p className="text-gray-800 py-1">GitHub, GitHub Action</p>
            <p className="text-gray-800 py-1">CI/CD</p>
            <p className="text-gray-800 py-1">Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
