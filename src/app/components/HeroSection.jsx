"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Engine: ", engine);
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Container: ", container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: "#2563eb",
        },
        links: {
          color: "#3b0764",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const loadParticle = () => {
    if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      );
    }

    return null;
  };

  return (
    <section className="lg:py-16">
      {loadParticle()}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1
            className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-blue-600 
                        to-purple-600 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
          >
            <span className="text-black">Hello, I'm </span>
            <TypeAnimation
              sequence={[
                "Zuriel Abasola",
                1000,
                "Full-Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={500}
              deletionSpeed={1}
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#272727] text-lg sm:text-lg mb-6 lg:text-xl">
            I'm a Software Engineer at the University of Calgary. I have an
            insatiable curiosity for the intricacies of programming and software
            engineering, such as software development, machine learning,
            competitive programming, and firmware. Currently making web
            applications and a chess engine.
          </p>
          <div>
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit hover:bg-gradient-to-tr hover:from-blue-900 
                            hover:via-blue-600 hover:to-purple-600 mr-4 bg-black text-white border-transparent"
            >
              Hire Me
            </button>
            <button
              className="px-6 py-3 rounded-full w-full sm:w-fit bg-transparent text-black border border-black mt-3 
                          hover:bg-gradient-to-tr hover:from-blue-900 hover:via-blue-600 hover:to-purple-600 
                          hover:border-transparent hover:text-white"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
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
