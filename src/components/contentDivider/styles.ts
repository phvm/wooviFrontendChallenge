import { Box, Divider, styled } from "@mui/material";

export const PaymentDivider = styled(Divider)({
  color: "#E5E5E5",
  width: "100%",
});

export const DividerContainer = styled(Box)({
  minWidth: "300px",
  width: "30%",
  maxWidth: "800px",
  padding: "0 4px",
  display: "flex",
  justifyContent: "center",
  margin: "12px 0",
});
