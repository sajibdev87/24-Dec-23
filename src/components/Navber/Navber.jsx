import React from "react";
import '../Navber/Navber.css'
import Logo from '../../assets/logo.png'
const Hero = () => {
  return (
    <div className="navbar bg-[#1C2B35]">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="text-white text-xl">
            <img className="ml-28" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="flex-row mr-28">
              <a className="text-white">Order</a>
              <a className="text-white">Order Review</a>
              <a className="text-white">Manag Inventory</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
