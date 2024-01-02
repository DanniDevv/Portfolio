import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { LinearProgress, Typography, Box } from "@mui/material";

const SkillBar = ({ label, value }) => {
  return (
    <Box sx={{ width: "100%", marginBottom: 2 }}>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ width: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          marginTop: 1,
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ color: "white" }}
        >
          {value}%
        </Typography>
      </Box>
    </Box>
  );
};

const SkillsProgress = () => {
  return (
    <div>
      <SkillBar label="Frontend/Design" value={80} />
      <SkillBar label="Backend" value={85} />
      <SkillBar label="Programming" value={80} />
    </div>
  );
};

export default SkillsProgress;
