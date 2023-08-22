import React from "react";

// import images
import womanImg from "../img/woman_hero.png";

// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* preTitle */}
          <div className="font-semibold uppercase flex items-center">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title  */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <apan className='font-semibold'>WOMENS</apan>
          </h1>
          <Link to='/' className="self-start uppercase font-semibold border-b-2 border-primary">Discaver more</Link>
        </div>
        <div className="hidden lg:block">
          <img src={womanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
