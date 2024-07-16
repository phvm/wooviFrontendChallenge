import { Box, styled } from "@mui/material";

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
