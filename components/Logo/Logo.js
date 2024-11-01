import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoImage from "@/public/images/LoagoL.png";
import LogoImage2 from "@/public/images/LoagoL2.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BackgroundBeamsWithCollision className="fixed inset-0 flex items-center justify-center h-screen w-screen overflow-hidden transition-all duration-1500 ease-in-out bg-primary">
      <div
        className={`flex flex-col items-center justify-center gap-5 w-full h-full ${
          isLoaded ? "bg-primary" : "bg-primary"
        }`}
      >
        <div className="relative flex flex-col items-center">
          <Image
            src={LogoImage}
            className={`transition-transform duration-1000 ease ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } w-[350px]`}
            alt="Logo"
            priority
          />
          <Image
            src={LogoImage2}
            className={`absolute top-24 w-[300px] ${isLoaded ? "fade-in" : ""}`}
            alt="Animated Logo"
            priority
          />
        </div>
        <div
          className={`absolute top-0 left-0 w-screen h-screen ${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1500 ease-in-out`}
        />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default Logo;
