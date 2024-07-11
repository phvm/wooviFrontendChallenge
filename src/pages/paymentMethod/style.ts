import { styled } from "@mui/system";
import { Box, Typography, Chip } from "@mui/material";

export const PageContainer = styled("main")({
  width: "100dvw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const PaymentText = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
});

export const InstallmentsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const OptionChip = styled(Chip)({
  fontWeight: 700,
  maxWidth: "150px",
  height: "20px",
});
