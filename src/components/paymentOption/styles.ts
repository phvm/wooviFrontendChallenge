import { Box, styled } from "@mui/material";

export const OptionContainer = styled(Box)({
  borderRadius: "10px",
  border: "2px solid #e5e5e5",
  width: "350px",
  padding: "16px",
  color: "#4D4D4D",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  transition: "all 0.35s",
  ":hover": {
    border: "2px solid #03D69D",
    backgroundColor: "#F4FBF9",
  },
});

export const RadioInstallmentContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
