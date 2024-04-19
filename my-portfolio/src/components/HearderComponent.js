// HeaderComponent.js
import React from 'react';
import Navbar from './NavBarComponent';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the FontAwesome GitHub and LinkedIn icons
import profilePic from '../assets/images/kinzaa.png'; // Import the profile picture

const Header = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-10 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Kinza Ali
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Data Engineer | Data Analyst
        </h3>
        <p className="text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl tracking-wider">
          Passionate Data Analyst and Engineer committed to unlocking insights
          and driving impactful solutions
        </p>
        <div className="text-5xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/kinza96/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Kinzali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <img
            src={profilePic}
            className="w-full h-full object-cover"
            alt="Atti Rehman"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
