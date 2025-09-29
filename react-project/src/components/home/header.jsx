import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
    color: isActive ? "#fff" : "#ddd",
  });

  return (
    <nav className="flex items-center justify-between max-w-1280px p-4 bg-blue-300 text-white">
      {/* Logo */}
      <div className=" w-22 h-auto">
        <img src="/images/logo.png" alt="MyShop Logo" />
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
      {/* Sign In Button */}
      <NavLink className=" px-4 py-2 rounded" to="/loginform" style={linkStyle}>
          Sign in
        </NavLink>
      
    </nav>
  );
}
