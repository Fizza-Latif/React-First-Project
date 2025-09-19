import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo / About */}
        <div>
          <div className=" w-22 h-auto">
            <img src="/images/logo.png" alt="MyShop Logo" />
          </div>
          <p className="mt-3 text-sm">
            Classic Shirts, Shoes, and Accessories. Quality you can trust.
          </p>
          <h3 className="text-lg font-semibold text-white  my-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            {/* <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2">
            <li>Men Wear</li>
            <li>Women Wear</li>
            <li>Kids Wear</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Help</h3>
          <ul className="space-y-2">
            <li>FAQ's</li>
            <li>Return Policy</li>
            <li>Order Status</li>
            <li>Shipping And Delivery</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
