import { Box, Button, styled, Typography } from "@mui/material";

export const PageContainer = styled("main")({
  width: "100dvw",
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const QRCodeContainer = styled(Box)({
  border: "2px solid #03D69D",
  padding: "8px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const QRCodeImg = styled("img")({
  minWidth: "300px",
});

export const CopyButton = styled(Button)({
  backgroundColor: "#133A6F",
  borderRadius: "8px",
  margin: "1.2rem",
  ":hover": {
    backgroundColor: "#0F2A4F",
  },
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

export const IdentifierLabel = styled(Typography)({
  color: "#B2B2B2",
  fontSize: ".8rem",
});

export const Identifier = styled(Typography)({
  color: "#4D4D4D",
  fontSize: "1rem",
  fontWeight: "600",
  marginBottom: "1rem",
});
