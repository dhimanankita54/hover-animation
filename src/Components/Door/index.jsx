import { Box, Typography } from "@mui/material";
import { Door } from "./Door";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

export const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: "72px",
            fontFamily: "'Krona One', sans-serif",
            mb: 5,
            color: "black",
            zIndex: 3,
          }}
        >
          Your Ticket to Space
        </Typography>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#F4F4F4",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#737C88",
              },
              links: {
                color: "#737C88",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
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
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: 20,
            width: "100%",
            m: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Door />
          <motion.div
            whileHover={{
              scale: 1.0001,
            }}
            exit={{
              scale: [1, 3, 7, 10],
              zIndex: 4,
              transition: { duration: 1 },
            }}
          >
            <Door />
          </motion.div>
          <Door />
        </Box>
      </Box>
    </>
    // </motion.div>
  );
};
