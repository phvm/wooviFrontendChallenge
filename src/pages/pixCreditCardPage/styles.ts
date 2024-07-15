import { Box, Button, styled } from "@mui/material";

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
