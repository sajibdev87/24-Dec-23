import React from "react";
import BoyImage from '../../assets/Boy image.png'
import BoyBgImage from '../../assets/boy bg image.jpg'

const Home = () => {
  return (
    <div className="hero min-h-screen bg-[#fff]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BoyImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
    
        <div>
          <p className="py-6">Sale up to 70% off</p>
          <h1 className="text-5xl font-bold">New Collection For Fall</h1>
          <p className="py-6">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <button className="btn btn-primary">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
