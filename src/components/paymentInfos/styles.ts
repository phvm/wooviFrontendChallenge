import { Box, styled, Typography } from "@mui/material";

export const IdentifierLabel = styled(Typography)({
  color: "#B2B2B2",
  fontSize: ".8rem",
});

export const Identifier = styled(Typography)({
  color: "#4D4D4D",
  fontSize: "1rem",
  fontWeight: "600",
});

export const DeadlineLabel = styled(Typography)({
  color: "#B2B2B2",
  fontSize: "1rem",
});

export const PaymentDeadline = styled(Typography)({
  color: "#4D4D4D",
  fontSize: "1.1rem",
});

export const DividerContent = styled(Box)({
  minWidth: "300px",
  width: "30%",
  maxWidth: "800px",
  padding: "0 8px",
  display: "flex",
  justifyContent: "space-between",
});

export const WorkingGuide = styled(Typography)({
  fontWeight: "600",
  color: "#4D4D4D",
  fontSize: "1rem",
});
