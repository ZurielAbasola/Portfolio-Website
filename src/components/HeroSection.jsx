import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-blue-600 to-purple-600 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-black">Hello, I'm </span>
            Zuriel
          </h1>
          <p className="text-[#272727] text-lg sm:text-lg mb-6 lg:text-xl">
            I'm a full-stack developer with a passion for building beautiful and
            functional web applications.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit hover:bg-gradient-to-tr hover:from-blue-900 hover:via-blue-600 hover:to-purple-600 mr-4 bg-black text-white font-bold border-transparent">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-300 text-black border border-black mt-3 hover:bg-gradient-to-tr hover:from-blue-900 hover:via-blue-600 hover:to-purple-600 hover:border-transparent hover:text-white">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative overflow-hidden">
            <Image
              src="/images/image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
