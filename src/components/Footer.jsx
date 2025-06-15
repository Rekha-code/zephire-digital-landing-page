import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Zephire Digital </h3>
          <p className="text-gray-400">"Go Beyond Online Presence."</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">Phone: +91 63924 25516 </p>
          <p className="text-gray-400">Email: hello@zephiredigital.com </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Zephire Digital. All rights reserved. </p>
      </div>
    </footer>
    </>
  )
}

export default Footer
