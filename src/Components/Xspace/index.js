import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import bg from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";

export const Xspace = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // const mask = document.querySelector(".container");

    // // Add an event to catch mouse movements.
    // document.addEventListener("pointermove", (pos) => {
    //   // Calculate mouse position in percentages.
    //   let x = parseInt((pos.clientX / window.innerWidth) * 100);
    //   let y = parseInt((pos.clientY / window.innerHeight) * 100);

    //   // Update the custom property values on the body.
    //   mask.style.setProperty("--mouse-x", x + "%");
    //   mask.style.setProperty("--mouse-y", y + "%");
    // });
    if (ended) {
      const spotlight = document.querySelector(".spotlight");
      document.addEventListener("mousemove", (pos) => {
        // Calculate mouse position in percentages.
        let x = parseInt((pos.clientX / window.innerWidth) * 100);
        let y = parseInt((pos.clientY / window.innerHeight) * 100);

        // Update the custom property values on the body.
        spotlight.style.setProperty("--mouse-x", x + "%");
        spotlight.style.setProperty("--mouse-y", y + "%");
      });
      // let spotlightSize = "transparent 0%, rgba(0, 0, 0) 20%";

      // window.addEventListener("mousemove", (e) => updateSpotlight(e));
      // window.addEventListener("mousedown", (e) => {
      //   spotlightSize = "transparent 10%, rgba(0, 0, 0) 25%";
      //   updateSpotlight(e);
      // });

      // window.addEventListener("mouseup", (e) => {
      //   spotlightSize = "transparent 20%, rgba(0, 0, 0,) 30%";
      //   updateSpotlight(e);
      // });

      // function updateSpotlight(e) {
      //   spotlight.style.backgroundImage = `radial-gradient(circle at ${
      //     (e.pageX / window.innerWidth) * 100
      //   }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
      // }
    }
  });

  const line1 = "Xspace";
  const line2 = "Escape Earth's limits with our celestial journeys";

  const [ended, setEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    // console.log(index);
    timerRef.current = setTimeout(() => setIndex((index) => index + 1), 100);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [index]);

  return (
    <>
      {!ended && (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          {line1.split("").map((letter, i) => (
            <div class="neon">
              <span
                class="text"
                data-text={letter}
                onAnimationEnd={() => setEnded(true)}
                onAnimationIteration={() => setIndex(0)}
                style={{ opacity: i == index ? 1 : 0 }}
              >
                {letter}
              </span>
              <span class="gradient"></span>
              <span class="spotlights"></span>
            </div>
          ))}
        </Box>
      )}
      {ended && (
        <Box className="container">
          <Box
            className={ended ? "spotlight" : null}
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              cursor: "none",
            }}
            onClick={() => navigate("/home")}
          >
            <>
              <motion.h1
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 0.5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {line1.split("").map((char, index) => {
                    return (
                      <motion.span
                        initial={{
                          opacity: 0,
                        }}
                        whileHover={{
                          opacity: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "120px",
                            fontFamily: "'Krona One', sans-serif",
                            color: "grey",
                            letterSpacing: 10,
                          }}
                        >
                          {char}
                        </Typography>
                      </motion.span>
                    );
                  })}
                </Box>
              </motion.h1>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {line2.split(" ").map((word, index) => (
                  <>
                    <motion.h1
                      initial={{
                        opacity: 0,
                      }}
                      whileHover={{
                        opacity: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Lexend Deca', sans-serif",
                          color: "grey",
                          fontSize: "32px",
                        }}
                      >
                        {word}
                      </Typography>
                    </motion.h1>
                  </>
                ))}
              </Box>
            </>
          </Box>
        </Box>
      )}
    </>
  );
};
