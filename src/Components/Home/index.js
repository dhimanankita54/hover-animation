import { Box, Button, Typography } from "@mui/material";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import bgVideo from "../../assets/bgVideo.mp4";

export const EnterHome = () => {
  return (
    <>
      <Box
        sx={{
          height: "89.2vh",
          padding: 5,
          position: "relative",
        }}
      >
        {/* <iframe
          src="https://drive.google.com/file/d/1pd78nHJLfWahjKWwcI7_8QW2OW6vwoTg/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            objectFit: "cover",
          }}
        ></iframe> */}
        <video
          autoPlay
          loop
          muted
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            objectFit: "cover",
          }}
        >
          <source
            src="https://drive.google.com/file/d/1pd78nHJLfWahjKWwcI7_8QW2OW6vwoTg/preview"
            type="video/mp4"
          />
        </video>

        <Box display="flex" justifyContent="flex-end" sx={{ zIndex: 4 }}>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "30px",
              padding: "12px 40px",
              fontFamily: "Lalezar",
              fontSize: "20px",
              "&.MuiButtonBase-root:hover": {
                backgroundColor: "grey",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Krona One', sans-serif",
              color: "#fff",
              fontSize: "102px",
              letterSpacing: "10px",
            }}
          >
            Xspace
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Lexend Deca', sans-serif",
              color: "#fff",
              fontSize: "32px",
            }}
          >
            Escape Earth's limits with our celestial journeys
          </Typography>
        </Box>
      </Box>
    </>
  );
};
