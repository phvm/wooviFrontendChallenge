import { styled } from "@mui/system";
import { Box, Chip, Typography } from "@mui/material";

export const PageContainer = styled("main")({
  width: "100dvw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const PaymentText = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "8px",
});

export const OptionsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "8px",
});

export const OptionChip = styled(Chip)({
  width: "fit-content",
  height: "20px",
  margin: "0 0 -10px 20px",
  padding: "0 8px",
  fontWeight: 700,
  zIndex: 2,
  backgroundColor: "#E5E5E5",
  color: "#4D4D4D",
});
