import { Box } from "@mui/material";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Door = () => {
  const [isExpanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          p: 1,
          border: "2px solid transparent",
          "&.MuiBox-root:hover": {
            border: "2px solid black",
            borderStyle: "dashed",
            zIndex: 3,
            borderBottom: "none",
            borderTopLeftRadius: "190px",
            borderTopRightRadius: "190px",
          },
        }}
      >
        <Box
          id="reflected-box"
          sx={{
            background: "black",
            minHeight: "350px",
            width: "270px",
            borderTopLeftRadius: "190px",
            borderTopRightRadius: "190px",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/xspace");
          }}
        ></Box>
      </Box>
    </>
  );
};
