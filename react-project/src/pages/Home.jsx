import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
    color: isActive ? "#fff" : "#ddd",
  });

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        MyShop
      </div>
      {/* Navigation Links */}
      <div className="flex gap-6">
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>
      </div>

      {/* Button */}
      <button className="bg-white text-blue-600 px-4 py-2 rounded">
        Sign Up
      </button>
    </nav>
  );
}
