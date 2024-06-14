"use client";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
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
      background: {
        color: "",
      },
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
      fullScreen: {
        enable: true,
        zIndex: 0,
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

  return <div className="z-0">{loadParticle()}</div>;
};

export default ParticlesBackground;
