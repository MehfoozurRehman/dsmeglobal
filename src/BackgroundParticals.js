import React, { memo } from "react";
import Particles from "react-tsparticles";

function BackgroundParticals({ particlesInit, particlesLoaded }) {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 12,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 180,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#242424",
          },
          links: {
            color: "rgba(0,0,0)",
            distance: 180,
            enable: true,
            opacity: 0.05,
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
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default memo(BackgroundParticals);
