import { Box, Stepper, styled, Typography } from "@mui/material";

export const PaymentStepper = styled(Stepper)({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
});

export const LabelContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const PaymentValue = styled(Typography)({
  fontWeight: "600",
});

export const PaymentParcel = styled(Typography)({});
