import { styled } from "@mui/material";
import { Button, Typography } from "@mui/material";

export const OptionContainer = styled(Button)({
  borderRadius: "10px",
  border: "2px solid #e5e5e5",
  width: "350px",
  padding: "12px",
  color: "#4D4D4D",
  transition: "all 0.5s",
  ":hover": {
    cursor: "pointer",
    border: "2px solid #03D69D",
    backgroundColor: "#F4FBF9",
  },
});

export const CashbackPercent = styled(Typography)({
  color: "#03d69d",
});
