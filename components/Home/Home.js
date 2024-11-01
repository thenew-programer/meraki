// Home.js
"use client"; // Mark this file as a client component

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import LogoImage from "@/public/images/LoagoL.png";
import LogoImage2 from "@/public/images/LoagoL2.png";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after a period
    }, 8000); // Set loading period to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Logo /> // Show loading screen while loading is true
      ) : (
        <div
          className={`flex flex-col items-center justify-center gap-7 w-screen h-screen bg-primary`}
        >
          <div className="relative flex flex-row items-center">
            <Image
              src={LogoImage}
              className={`transition-transform duration-1000 ease opacity-100 scale-100 w-[500px]`}
              alt="Logo"
              priority
            />
            <Image
              src={LogoImage2}
              className={`absolute left-20 top-20 w-[400px]`}
              alt="Animated Logo"
              priority
            />
          </div>
          <div>
            <h2 className="relative bg-clip-text bg-no-repeat text-primary py-4 font-modern text-[50px]">
              <span>YOUR BEAUTY OASIS IS COMING SOON</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
