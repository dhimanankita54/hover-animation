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
            src="https://rr3---sn-qxa7sn7r.c.drive.google.com/videoplayback?expire=1703446649&ei=SV6IZfa6JZG8p84P7suT-Ao&ip=103.82.150.169&id=fd745adb9ad66f09&itag=18&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=5L&mm=32&mn=sn-qxa7sn7r&ms=su&mv=m&mvi=3&pl=24&ttl=transient&susc=dr&driveid=1pd78nHJLfWahjKWwcI7_8QW2OW6vwoTg&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=33.390&lmt=1703434643892229&mt=1703435577&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswQwIfN-Lb_lLOxjq4KxKHuDmWtqQ-mXuFY2ItprFyFBfwgwIgVqQTBxdGlMtJILIxjRBn1bLkP4M56nKwq3j7cJUDKy0=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAPLYijxfjPgW2LBA-fZHb4gnAjctf0LUM2-g01UnIXMaAiEAwjagVhzglPl6cqotKcah-lLl_-MgpzZIlZTTjwWu2FY=&cpn=gaJaxMg3RBnbf5iE&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"
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
